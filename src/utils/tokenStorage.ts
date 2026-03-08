import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, PROFILE_ID_KEY } from '../types/token';

/**
 * Save access token
 */
export const saveAccessToken = async (token: string): Promise<void> => {
  if (!token) throw new Error('Access token is required');
  await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
};

/**
 * Get access token
 */
export const getAccessToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
};

/**
 * Save refresh token
 */
export const saveRefreshToken = async (token: string): Promise<void> => {
  if (!token) throw new Error('Refresh token is required');
  await AsyncStorage.setItem(REFRESH_TOKEN_KEY, token);
};

/**
 * Get refresh token
 */
export const getRefreshToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
};

/**
 * Save profile ID (if required for your refresh flow)
 */
export const saveProfileId = async (profileId: string): Promise<void> => {
  if (!profileId) throw new Error('Profile ID is required');
  await AsyncStorage.setItem(PROFILE_ID_KEY, profileId);
};

/**
 * Get profile ID
 */
export const getProfileId = async (): Promise<string | null> => {
  return await AsyncStorage.getItem(PROFILE_ID_KEY);
};

/**
 * Save complete auth session
 */
export const saveAuthSession = async (
  accessToken: string,
  refreshToken: string,
  profileId: string,
): Promise<void> => {
  await Promise.all([
    saveAccessToken(accessToken),
    saveRefreshToken(refreshToken),
    saveProfileId(profileId),
  ]);
};

/**
 * Clear all auth-related data
 */
export const clearUserData = async (): Promise<void> => {
  await AsyncStorage.multiRemove([
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    PROFILE_ID_KEY,
  ]);
};
