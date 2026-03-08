# 🚀 Quick Reference Card - CampusLive API Integration

## 📝 Creating a New Service (5 Steps)

### 1. **Define Types** (`feature.types.ts`)
```typescript
export interface CreatePostRequest {
  title: string;
  content: string;
}

export interface CreatePostResponse {
  success: boolean;
  message: string;
  data: {
    post: Post;
  };
}
```

### 2. **Create API Function** (`feature.ts`)
```typescript
import api from '@/src/services/api/client';

export const createPost = async (data: CreatePostRequest) => {
  const response = await api.post<CreatePostResponse>('/posts', data);
  return response.data;
};
```

### 3. **Create Mutation Hook** (`feature.mutations.ts`)
```typescript
import { useMutation } from '@tanstack/react-query';
import toast from '@/src/utils/toast';

export const useCreatePostMutation = () => {
  return useMutation({
    mutationFn: createPost,
    onSuccess: (response) => {
      toast.success(response.message);
    },
  });
};
```

### 4. **Create Query Hook** (`feature.queries.ts`) - For GET endpoints
```typescript
import { useQuery } from '@tanstack/react-query';

export const usePostsQuery = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => api.get('/posts').then(res => res.data),
    staleTime: 5 * 60 * 1000,
  });
};
```

### 5. **Use in Component**
```typescript
function CreatePostScreen() {
  const { mutate: createPost, isPending } = useCreatePostMutation();
  
  const handleSubmit = () => {
    createPost({ title, content });
  };
  
  return (
    <Button 
      onPress={handleSubmit} 
      disabled={isPending}
      title={isPending ? 'Creating...' : 'Create Post'}
    />
  );
}
```

---

## 🎯 Common Patterns

### **POST/PUT/DELETE (Mutations)**
```typescript
const { mutate, isPending, error } = useMutationHook();

mutate(data, {
  onSuccess: (response) => {
    // Optional override
  },
  onError: (error) => {
    // Optional custom error handling
  },
});
```

### **GET (Queries)**
```typescript
const { data, isLoading, error, refetch } = useQueryHook();

if (isLoading) return <Spinner />;
if (error) return <Error />;

return <View>{data.map(...)}</View>;
```

### **Toast Notifications**
```typescript
import toast from '@/src/utils/toast';

toast.success('Done!');
toast.error('Failed!');
toast.info('Info');
toast.warning('Warning');
```

### **Store Access**
```typescript
import { useCurrentUser, useIsLoggedIn } from '@/src/store/useStore';

const user = useCurrentUser();
const isLoggedIn = useIsLoggedIn();

// Update user
const { updateUser } = useUserStore();
updateUser({ username: 'newname' });
```

---

## 📦 Import Cheat Sheet

```typescript
// API Client (for raw requests)
import api from '@/src/services/api/client';

// React Query
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// Toast
import toast from '@/src/utils/toast';

// Token Storage
import { saveAuthSession, clearUserData, getAccessToken } from '@/src/utils/tokenStorage';

// Store
import { useCurrentUser, useIsLoggedIn, useUserStore } from '@/src/store/useStore';

// Router
import { useRouter, Link } from 'expo-router';
```

---

## 🔧 Configuration Reference

### **API Base URL**
```typescript
// .env
EXPO_BASE_API_URL=https://api.campuslive.com

// services/api/client.ts (auto-configured)
```

### **Request Timeout**
```typescript
// services/api/client.ts
const api = axios.create({
  timeout: 15000, // 15 seconds
});
```

### **Cache Times**
```typescript
// services/api/queryClient.ts
staleTime: 30 * 1000,  // 30 seconds (fresh)
gcTime: 5 * 60 * 1000,  // 5 minutes (cached)
```

### **Retry Logic**
```typescript
// services/api/queryClient.ts
retry: 3,  // Retry 3 times
retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
```

---

## 🎨 Response Format Examples

### **Success Response**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    "user": { ... }
  }
}
```

### **Error Response**
```json
{
  "success": false,
  "message": "Operation failed",
  "error": "Validation error",
  "errors": {
    "email": ["Invalid email format"]
  }
}
```

---

## 🐛 Debugging

### **Check API Call**
```typescript
// Enable axios logging
api.interceptors.request.use(config => {
  console.log('[API Request]:', config.method, config.url, config.data);
  return config;
});
```

### **Check Token**
```typescript
import { getAccessToken } from '@/src/utils/tokenStorage';

const token = await getAccessToken();
console.log('Current token:', token);
```

### **Check Store State**
```typescript
import { useUserStore } from '@/src/store/useStore';

const user = useUserStore.getState().user;
console.log('Current user:', user);
```

### **Check React Query Cache**
```typescript
const queryClient = useQueryClient();
const data = queryClient.getQueryData(['posts']);
console.log('Cached posts:', data);
```

---

## ⚡ Performance Tips

1. **Use Query Keys Properly**
```typescript
// Good - specific keys for cache invalidation
['posts', { userId: '123' }]
['profile', userId]

// Bad - vague keys
['data']
['fetch']
```

2. **Prefetch Data**
```typescript
const queryClient = useQueryClient();

await queryClient.prefetchQuery({
  queryKey: ['posts'],
  queryFn: getPosts,
});
```

3. **Optimistic Updates**
```typescript
onMutate: async (newData) => {
  await queryClient.cancelQueries(['posts']);
  const previous = queryClient.getQueryData(['posts']);
  queryClient.setQueryData(['posts'], old => [...old, newData]);
  return { previous };
},
onError: (err, newData, context) => {
  queryClient.setQueryData(['posts'], context.previous);
},
```

---

## 🔐 Security Checklist

- ✅ Tokens stored in expo-secure-store (never AsyncStorage)
- ✅ Tokens auto-attached to requests (interceptor)
- ✅ Auto-refresh on 401 errors
- ✅ Clear all data on logout
- ✅ Never log tokens or sensitive data
- ✅ Validate all user inputs
- ✅ Use HTTPS for all API calls

---

## 📁 File Naming Conventions

```
feature/
├── services/
│   ├── feature.types.ts       → Types
│   ├── feature.ts             → API functions
│   ├── feature.mutations.ts   → Mutations
│   └── feature.queries.ts     → Queries
├── components/
│   ├── FeatureList.tsx        → Components
│   └── FeatureItem.tsx
└── hooks/
    └── useFeature.ts          → Custom hooks
```

---

## 🚨 Common Errors & Fixes

| Error | Solution |
|-------|----------|
| `Cannot read property 'data' of undefined` | Add `response?.data` or check API response |
| `401 Unauthorized` | Check token storage and interceptor |
| `Toast not showing` | Verify `<Toast />` in root layout |
| `Store resets` | Add persistence (see STORE_ANALYSIS.md) |
| `TypeScript error` | Check types match backend exactly |
| `Network request failed` | Check base URL and internet connection |

---

## 📚 Full Documentation

- **Complete Guide:** [SERVICE_CREATION_GUIDE.md](SERVICE_CREATION_GUIDE.md)
- **Login Example:** [LOGIN_EXAMPLE.md](LOGIN_EXAMPLE.md)
- **Store Analysis:** [STORE_ANALYSIS.md](STORE_ANALYSIS.md)
- **Toast Guide:** [TOAST_GUIDE.md](TOAST_GUIDE.md)
- **Architecture:** [ARCHITECTURE_SUMMARY.md](ARCHITECTURE_SUMMARY.md)

---

## 💡 Pro Tips

1. **Copy the auth service** - Use as template for new features
2. **Keep types synced** - Types should match backend exactly
3. **Use selector hooks** - Better performance than full store
4. **Toast for success** - Error toasts are automatic
5. **Test on real devices** - Emulators can hide issues

---

**Print this for quick reference!** 📄
