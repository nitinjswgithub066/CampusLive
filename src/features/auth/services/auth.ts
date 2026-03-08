/**
 * Authentication Service
 * 
 * API functions for auth endpoints
 * Uses the configured axios client from services/api/client
 */

import api from '@/src/services/api/client';
import { AUTH_ENDPOINTS } from '@/src/types/apiPath';
import type {
  LoginRequest,
  LoginResponse,
  LoginResponseData,
} from './auth.types';

/**
 * Login with username/email/mobile and password
 * 
 * @param payload - Login credentials
 * @returns Object with data, status, and message
 * 
 * @example
 * const { data, status, message } = await authService.login({
 *   identifier: 'john@example.com',
 *   password: 'SecurePass123'
 * });
 * 
 * if (status === 200) {
 *   // Handle success
 *   console.log(data.accessToken);
 * }
 */
export const login = async (
  payload: LoginRequest
): Promise<{
  data: LoginResponseData | null;
  status: number;
  message: string;
}> => {
  const baseUrl = `${process.env.EXPO_PUBLIC_API_URL}${AUTH_ENDPOINTS.LOGIN}`;

  try {
    const response = await api.post<LoginResponse>(baseUrl, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = response.data;
    const status = response.status;

    return {
      data: result.data,
      status,
      message: result.message ?? '',
    };
  } catch (error: unknown) {
    const axiosError = error as {
      response?: {
        status?: number;
        data?: {
          message?: string;
          error?: string;
        };
      };
    };

    return {
      data: null,
      status: axiosError.response?.status || 500,
      message: axiosError.response?.data?.message ?? axiosError.response?.data?.error ?? 'Login failed',
    };
  }
};

const authService = {
  login,
};

export default authService;
