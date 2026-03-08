# 📚 Frontend Service Creation Guide

## Complete Tutorial: Building API Services in CampusLive

This guide explains how to create production-ready API services in your React Native app using our established architecture.

---

## 🏗️ Architecture Overview

Our service layer follows a clean, scalable pattern:

```
src/features/[feature]/services/
├── [feature].types.ts      → TypeScript types for requests/responses
├── [feature].ts            → API service functions (axios calls)
├── [feature].mutations.ts  → React Query mutation hooks (POST/PUT/DELETE)
└── [feature].queries.ts    → React Query query hooks (GET)
```

### Why This Structure?

✅ **Separation of Concerns:** Types, logic, and hooks are separated  
✅ **Type Safety:** Full TypeScript support with autocompletion  
✅ **Reusability:** Services can be used anywhere in the app  
✅ **Testability:** Easy to mock and test each layer  
✅ **Maintainability:** Changes to API only need updates in one place  

---

## 📝 Step-by-Step: Creating a Service

Let's create a service for the **POST /auth/login** endpoint as an example.

### **Step 1: Define Types** (`auth.types.ts`)

Start by defining TypeScript interfaces for your API contracts.

```typescript
// src/features/auth/services/auth.types.ts

/**
 * Login Request Body
 * What you send to the backend
 */
export interface LoginRequest {
  identifier: string; // username, email, or mobile
  password: string;
}

/**
 * Login Response Body
 * What the backend returns
 */
export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    user: LoginUser;
  };
}

/**
 * User data from login response
 */
export interface LoginUser {
  id: string;
  username: string | null;
  email: string | null;
  mobileNumber: string | null;
  accountType: string;
  authRole: string;
  isActive: boolean;
}
```

#### 🎯 Type Definition Rules:

1. **Match Backend Exactly:** Your types should mirror backend response structure
2. **Use Descriptive Names:** `LoginRequest`, `LoginResponse` (not `LoginData`)
3. **Export Everything:** Other files will import these types
4. **Nullable Fields:** Use `| null` for optional backend fields
5. **Document Unclear Fields:** Add JSDoc comments for context

---

### **Step 2: Create API Service** (`auth.ts`)

Write pure functions that call your API endpoints.

```typescript
// src/features/auth/services/auth.ts

import api from '@/src/services/api/client';
import type { LoginRequest, LoginResponse } from './auth.types';

/**
 * Login with username/email/mobile and password
 * 
 * @param credentials - Login credentials
 * @returns Login response with tokens and user data
 * 
 * @example
 * const response = await authService.login({
 *   identifier: 'john@example.com',
 *   password: 'SecurePass123'
 * });
 */
export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/auth/login', credentials);
  return response.data;
};

// Export as service object (optional but clean)
const authService = {
  login,
  // ... other functions
};

export default authService;
```

#### 🎯 Service Function Rules:

1. **Use Axios Client:** Import from `@/src/services/api/client` (has auth interceptors)
2. **Async/Await:** All functions should be async
3. **Type Response:** Use `api.post<ResponseType>()` for type safety
4. **Return Data:** Return `response.data`, not the full axios response
5. **No Side Effects:** Don't modify state here, just fetch data
6. **Add JSDoc:** Document parameters and return values

---

### **Step 3: Create Mutation Hook** (`auth.mutations.ts`)

Wrap your service function in a React Query mutation.

```typescript
// src/features/auth/services/auth.mutations.ts

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import authService from './auth';
import type { LoginRequest } from './auth.types';
import { useUserStore } from '@/src/store/useStore';
import { saveAuthSession } from '@/src/utils/tokenStorage';
import toast from '@/src/utils/toast';

/**
 * Login mutation hook
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
      const { accessToken, refreshToken, user } = response.data;

      // 1. Save tokens to secure storage
      await saveAuthSession(accessToken, refreshToken, user.id);

      // 2. Update Zustand store with user data
      setUser({
        id: user.id,
        profileId: user.id,
        username: user.username || '',
        email: user.email || '',
        mobileNumber: user.mobileNumber || '',
        avatarUrl: '',
        isStreamer: user.accountType === 'streamer',
        isLoggedIn: true,
        role: 'viewer',
      });

      // 3. Show success toast
      toast.success(response.message || 'Login successful!', 'Welcome Back');

      // 4. Navigate to home screen
      router.replace('/(app)/(tabs)');
    },

    onError: (error) => {
      // Error toast shown automatically by queryClient
      console.error('[Login Error]:', error);
    },
  });
};
```

#### 🎯 Mutation Hook Rules:

1. **Use useMutation:** Import from `@tanstack/react-query`
2. **mutationFn:** Should call your service function
3. **onSuccess:** Handle side effects (save data, navigate, show toast)
4. **onError:** Log errors (toast shown automatically by queryClient)
5. **Return the Mutation:** Return `useMutation()` result
6. **Use Zustand Store:** Update global state if needed
7. **Navigation:** Use `expo-router` for screen transitions
8. **Toast Feedback:** Show success toasts for user actions

---

### **Step 4: Create Query Hook** (`auth.queries.ts`)

For GET requests, create query hooks.

```typescript
// src/features/auth/services/auth.queries.ts

import { useQuery } from '@tanstack/react-query';
import authService from './auth';

/**
 * Query keys for cache management
 */
export const authQueryKeys = {
  all: ['auth'] as const,
  currentUser: () => [...authQueryKeys.all, 'currentUser'] as const,
};

/**
 * Get current authenticated user
 * 
 * @example
 * const { data: user, isLoading, error } = useCurrentUserQuery();
 * 
 * if (isLoading) return <Spinner />;
 * return <Text>Hello {user.username}!</Text>;
 */
export const useCurrentUserQuery = () => {
  return useQuery({
    queryKey: authQueryKeys.currentUser(),
    queryFn: authService.getCurrentUser,
    
    staleTime: 5 * 60 * 1000,      // Fresh for 5 minutes
    gcTime: 10 * 60 * 1000,        // Cache for 10 minutes
    
    retry: (failureCount, error: any) => {
      if (error?.response?.status === 401) {
        return false; // Don't retry auth errors
      }
      return failureCount < 3;
    },
  });
};
```

#### 🎯 Query Hook Rules:

1. **Use useQuery:** Import from `@tanstack/react-query`
2. **queryKey:** Unique identifier for caching (use query keys object)
3. **queryFn:** Service function that fetches data
4. **staleTime:** How long data stays "fresh" before refetching
5. **gcTime:** How long unused data stays in cache
6. **retry:** Custom retry logic (skip 401 errors)
7. **enabled:** Conditionally enable/disable queries

---

## 🎨 Using Your Service in Components

### Login Component Example

```typescript
// app/(auth)/login.tsx

import { useState } from 'react';
import { View, TextInput, Button, ActivityIndicator } from 'react-native';
import { useLoginMutation } from '@/src/features/auth/services/auth.mutations';

export default function LoginScreen() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  
  // Use the mutation hook
  const { mutate: login, isPending } = useLoginMutation();

  const handleLogin = () => {
    login(
      { identifier, password },
      {
        // Optional: Override default handlers
        onSuccess: () => {
          console.log('Login successful!');
        },
        onError: (error) => {
          console.error('Login failed:', error);
        },
      }
    );
  };

  return (
    <View>
      <TextInput
        placeholder="Email or Username"
        value={identifier}
        onChangeText={setIdentifier}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={isPending ? 'Logging in...' : 'Login'}
        onPress={handleLogin}
        disabled={isPending}
      />
      {isPending && <ActivityIndicator />}
    </View>
  );
}
```

---

## 🔄 Complete Flow Diagram

```
User Input (Component)
    ↓
useMutation Hook (auth.mutations.ts)
    ↓
Service Function (auth.ts)
    ↓
Axios Client (services/api/client.ts)
    ↓
Request Interceptor (adds token)
    ↓
Backend API
    ↓
Response Interceptor (handles 401)
    ↓
Service Function (returns data)
    ↓
onSuccess Handler
    ↓
├── Save tokens (tokenStorage.ts)
├── Update store (Zustand)
├── Show toast (toast.ts)
└── Navigate (expo-router)
```

---

## 📦 What We Already Have

### Pre-configured Infrastructure:

✅ **API Client** - `src/services/api/client.ts`  
✅ **Interceptors** - `src/services/api/interceptors.ts` (auto-adds tokens, refreshes)  
✅ **Query Client** - `src/services/api/queryClient.ts` (caching, errors)  
✅ **Toast System** - `src/utils/toast.ts` (notifications)  
✅ **Token Storage** - `src/utils/tokenStorage.ts` (secure storage)  
✅ **Zustand Store** - `src/store/` (global state)  

### You Just Need to:

1. Define types for your endpoint
2. Create service function
3. Wrap in useMutation/useQuery
4. Use in components

---

## 🚨 Common Mistakes to Avoid

### ❌ DON'T: Call axios directly in components
```typescript
// BAD
const handleLogin = async () => {
  const response = await axios.post('/auth/login', data);
};
```

### ✅ DO: Use service functions and hooks
```typescript
// GOOD
const { mutate: login } = useLoginMutation();
const handleLogin = () => login(data);
```

---

### ❌ DON'T: Handle tokens manually
```typescript
// BAD
axios.post('/api/data', data, {
  headers: { Authorization: `Bearer ${token}` }
});
```

### ✅ DO: Use configured API client (tokens added automatically)
```typescript
// GOOD
api.post('/api/data', data); // Token added by interceptor
```

---

### ❌ DON'T: Update state directly after API call
```typescript
// BAD - mixing concerns
const handleLogin = async () => {
  const response = await authService.login(data);
  setUser(response.user); // State logic in component
  await saveTokens(response.tokens); // Storage logic in component
  router.push('/home'); // Navigation logic in component
};
```

### ✅ DO: Keep side effects in mutation hooks
```typescript
// GOOD - side effects in mutation
const { mutate: login } = useLoginMutation(); // Handles everything
const handleLogin = () => login(data);
```

---

### ❌ DON'T: Show error toasts manually
```typescript
// BAD - redundant
onError: (error) => {
  toast.error(error.message); // Already shown by queryClient!
};
```

### ✅ DO: Let queryClient handle errors (or show custom message)
```typescript
// GOOD - specific custom message only
onError: (error) => {
  console.error('[Login Error]:', error);
  // Toast shown automatically by queryClient
};
```

---

## 🎯 Checklist for Creating a New Service

- [ ] **Step 1:** Create `[feature].types.ts` with request/response interfaces
- [ ] **Step 2:** Create `[feature].ts` with API service functions
- [ ] **Step 3:** Create `[feature].mutations.ts` with mutation hooks (POST/PUT/DELETE)
- [ ] **Step 4:** Create `[feature].queries.ts` with query hooks (GET)
- [ ] **Step 5:** Add JSDoc comments to all functions
- [ ] **Step 6:** Handle success cases (save data, navigate, toast)
- [ ] **Step 7:** Test the service in a component
- [ ] **Step 8:** Check for TypeScript errors

---

## 📚 Quick Reference

### Service Function Template
```typescript
export const apiFunction = async (data: RequestType): Promise<ResponseType> => {
  const response = await api.post<ResponseType>('/endpoint', data);
  return response.data;
};
```

### Mutation Hook Template
```typescript
export const useMutationHook = () => {
  return useMutation({
    mutationFn: (data: RequestType) => service.apiFunction(data),
    onSuccess: (response) => {
      // Handle success
    },
    onError: (error) => {
      console.error('[Error]:', error);
    },
  });
};
```

### Query Hook Template
```typescript
export const useQueryHook = () => {
  return useQuery({
    queryKey: ['key'],
    queryFn: service.apiFunction,
    staleTime: 5 * 60 * 1000,
  });
};
```

---

## 🔗 Related Documentation

- [Toast Guide](../../../TOAST_GUIDE.md) - Using toast notifications
- [Store Analysis](../../../STORE_ANALYSIS.md) - Zustand store patterns
- [React Query Docs](https://tanstack.com/query/latest) - Official docs

---

## 💡 Pro Tips

1. **Copy the auth service as a template** for new features
2. **Keep query keys in one object** for easy cache invalidation
3. **Use optimistic updates** for better UX (update UI before API call)
4. **Prefetch data** on navigation for instant loading
5. **Test error cases** to ensure toasts show correctly

---

**Need help?** Check the example auth service implementation in `src/features/auth/services/` - it's a complete, production-ready example!
