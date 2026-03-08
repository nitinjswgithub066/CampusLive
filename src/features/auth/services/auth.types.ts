/**
 * Authentication Service Types
 * 
 * Define all request/response types for auth endpoints
 * Keep in sync with backend API contracts
 */

// ==================== LOGIN ====================

export interface LoginRequest {
  identifier: string; // username, email, or mobile number
  password: string;
}

export interface LoginUser {
  id: string;
  username: string | null;
  email: string | null;
  mobileNumber: string | null;
  accountType: string;
  authRole: string;
  isActive: boolean;
}

export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
  user: LoginUser;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: LoginResponseData;
}
