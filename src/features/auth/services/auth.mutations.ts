/**
 * Authentication Mutations (React Query)
 * 
 * Custom hooks for auth mutations (POST/PUT/DELETE operations)
 * Handles optimistic updates, cache invalidation, and side effects
 */

import { useMutation } from '@tanstack/react-query';
import { useRouter, type Href } from 'expo-router';
import authService from './auth';
import type { LoginRequest } from './auth.types';
import { useUserStore } from '@/src/store/useStore';
import { saveAuthSession } from '@/src/utils/tokenStorage';
import toast from '@/src/utils/toast';

// Helper for navigation to handle strict Expo Router types
const navigateToTabs = (router: ReturnType<typeof useRouter>) => {
  router.replace('/(tabs)' as Href);
};

/**
 * Login mutation hook
 * 
 * Handles login, saves tokens, updates store, and redirects
 * 
 * @example
 * const { mutate: login, isPending } = useLoginMutation();
 * 
 * const handleLogin = () => {
 *   login(
 *     { identifier: 'user@example.com', password: 'pass123' },
 *     {
 *       onSuccess: () => console.log('Logged in!'),
 *       onError: (error) => console.error(error)
 *     }
 *   );
 * };
 */
export const useLoginMutation = () => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: (credentials: LoginRequest) => authService.login(credentials),

    onSuccess: async (response) => {
      const { data, status, message } = response;

      // Check if login was successful
      if (status !== 200 || !data) {
        toast.error(message || 'Login failed');
        return;
      }

      // 1. Save tokens to secure storage
      await saveAuthSession(data.accessToken, data.refreshToken, data.user.id);

      // 2. Update Zustand store with user data
      setUser({
        id: data.user.id,
        profileId: data.user.id, // Assuming profileId is same as id
        username: data.user.username || '',
        email: data.user.email || '',
        mobileNumber: data.user.mobileNumber || '',
        avatarUrl: '', // TODO: Add avatar from backend
        isStreamer: data.user.accountType === 'streamer',
        isLoggedIn: true,
        role: 'viewer', // Map from authRole if needed
      });

      // 3. Show success toast
      toast.success(message || 'Login successful!', 'Welcome Back');

      // 4. Navigate to home screen
      navigateToTabs(router);
    },

    onError: (error: Error) => {
      // Show error toast
      toast.error(error.message || 'Login failed');
      console.error('[Login Error]:', error);
    },
  });
};
