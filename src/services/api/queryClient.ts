import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from '../../utils/toast';

interface ErrorResponse {
  message?: string;
  error?: string;
}

/**
 * Global error handler for queries
 * Shows toast notifications for user feedback
 */
const handleQueryError = (error: unknown) => {
  if (error instanceof AxiosError) {
    const errorMessage =
      (error.response?.data as ErrorResponse)?.message ||
      (error.response?.data as ErrorResponse)?.error ||
      error.message ||
      'An unexpected error occurred';

    console.error('[Query Error]:', errorMessage);
    
    // Don't show toast for 401 errors (handled by interceptor)
    if (error.response?.status !== 401) {
      toast.error(errorMessage);
    }
  } else {
    console.error('[Query Error]:', error);
    toast.error('Something went wrong. Please try again.');
  }
};

/**
 * Global error handler for mutations
 * Shows toast notifications for user feedback
 */
const handleMutationError = (error: unknown) => {
  if (error instanceof AxiosError) {
    const errorMessage =
      (error.response?.data as ErrorResponse)?.message ||
      (error.response?.data as ErrorResponse)?.error ||
      error.message ||
      'Operation failed';

    console.error('[Mutation Error]:', errorMessage);
    
    // Don't show toast for 401 errors (handled by interceptor)
    if (error.response?.status !== 401) {
      toast.error(errorMessage, 'Operation Failed');
    }
  } else {
    console.error('[Mutation Error]:', error);
    toast.error('Operation failed. Please try again.');
  }
};

/**
 * Configured React Query client for production use
 * 
 * Features:
 * - Smart caching with stale-time and garbage collection
 * - Automatic retries with exponential backoff
 * - Global error handling
 * - Performance optimizations for mobile
 */
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleQueryError,
  }),
  mutationCache: new MutationCache({
    onError: handleMutationError,
  }),
  defaultOptions: {
    queries: {
      // Cache fresh data for 30 seconds before refetching
      staleTime: 30 * 1000,
      
      // Keep unused data in cache for 5 minutes
      gcTime: 5 * 60 * 1000,
      
      // Retry failed requests up to 3 times
      retry: 3,
      
      // Exponential backoff delay (1s, 2s, 4s)
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      
      // Don't refetch on window focus (mobile optimization)
      refetchOnWindowFocus: false,
      
      // Refetch on reconnect after network loss
      refetchOnReconnect: true,
      
      // Don't refetch when component mounts if data is fresh
      refetchOnMount: false,
    },
    mutations: {
      // Retry failed mutations once
      retry: 1,
      
      // 1 second retry delay for mutations
      retryDelay: 1000,
    },
  },
});

export default queryClient;
