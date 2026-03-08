import axios, { AxiosInstance } from 'axios';
import { setupInterceptors } from './interceptors';

const BASE_URL = process.env.EXPO_BASE_API_URL;

/**
 * Configured Axios instance for all API requests
 * - Includes automatic token management
 * - Handles token refresh on 401 errors
 * - 15 second timeout for all requests
 */
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Setup request/response interceptors
setupInterceptors(api);

export default api;