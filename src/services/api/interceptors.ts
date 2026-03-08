import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import {
  getAccessToken,
  getRefreshToken,
  saveAccessToken,
  clearUserData,
} from '../../utils/tokenStorage';
import toast from '../../utils/toast';
import { AUTH_ENDPOINTS } from '../../types/apiPath';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Token refresh state management
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const subscribeTokenRefresh = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

/**
 * Request interceptor: Attaches access token to all outgoing requests
 * @param config - Axios request configuration
 * @returns Modified config with Authorization header
 */
export const requestInterceptor = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const token = await getAccessToken();

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

/**
 * Request error interceptor
 * @param error - Axios error object
 * @returns Rejected promise with error
 */
export const requestErrorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};

/**
 * Response interceptor: Handles token refresh on 401 errors
 * @param api - Axios instance to use for retry requests
 * @returns Response interceptor function
 */
export const createResponseErrorInterceptor = (api: AxiosInstance) => {
  return async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    // If no response or network error, reject immediately
    if (!error.response) {
      return Promise.reject(error);
    }

    // Only handle 401 Unauthorized errors
    // Skip if already retried to prevent infinite loops
    if (error.response.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    // Handle token refresh
    if (!isRefreshing) {
      isRefreshing = true;

      try {
        const refreshToken = await getRefreshToken();

        // No refresh token available, clear data and logout
        if (!refreshToken) {
          await clearUserData();
          toast.error('Session expired. Please login again.', 'Session Expired');
          return Promise.reject(error);
        }

        // Attempt to refresh the access token
        const response = await axios.post(`${BASE_URL}${AUTH_ENDPOINTS.REFRESH_TOKEN}`, {
          refreshToken,
        });

        const newAccessToken = response.data.accessToken;

        // Save new access token
        await saveAccessToken(newAccessToken);

        // Notify all queued requests with new token
        onRefreshed(newAccessToken);
      } catch (refreshError) {
        // Refresh failed, clear user data and logout
        await clearUserData();
        toast.error('Session expired. Please login again.', 'Session Expired');
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // Queue the original request until token is refreshed
    return new Promise((resolve) => {
      subscribeTokenRefresh((token: string) => {
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${token}`;
        }
        resolve(api(originalRequest));
      });
    });
  };
};

/**
 * Setup all interceptors for the provided Axios instance
 * @param api - Axios instance to configure
 */
export const setupInterceptors = (api: AxiosInstance): void => {
  // Request interceptors
  api.interceptors.request.use(requestInterceptor, requestErrorInterceptor);

  // Response interceptors
  api.interceptors.response.use(
    (response) => response,
    createResponseErrorInterceptor(api)
  );
};
