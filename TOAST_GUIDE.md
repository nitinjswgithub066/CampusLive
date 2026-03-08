# 🎉 Toast Notification System - Usage Guide

## Overview
Your app now has a production-ready toast notification system integrated with React Query and Axios interceptors.

## ✅ What's Been Set Up

### Files Created:
- ✅ `src/utils/toast.ts` - Toast utility functions
- ✅ `src/utils/toastConfig.tsx` - Custom toast styling
- ✅ Updated `app/_layout.tsx` - Added Toast provider
- ✅ Updated `src/services/api/queryClient.ts` - Auto-shows errors
- ✅ Updated `src/services/api/interceptors.ts` - Shows session expiry
- ✅ Installed `react-native-toast-message` package

## 🚀 Usage Examples

### Basic Usage

```typescript
import toast from '@/src/utils/toast';

// Simple messages
toast.success('Profile updated successfully!');
toast.error('Failed to load data');
toast.info('New message received');
toast.warning('Storage almost full');

// With custom titles
toast.success('Changes saved', 'Success');
toast.error('Invalid email format', 'Validation Error');

// Custom options
toast.show({
  type: 'success',
  title: 'Custom Toast',
  message: 'This is a custom toast',
  duration: 5000,
  position: 'bottom',
});
```

### In Components

```typescript
import toast from '@/src/utils/toast';

function ProfileScreen() {
  const handleSave = async () => {
    try {
      await updateProfile(data);
      toast.success('Profile updated successfully!');
    } catch (error) {
      // No need to show error - queryClient handles it automatically!
      // Or show custom error:
      toast.error('Could not save changes');
    }
  };

  return <Button onPress={handleSave} title="Save" />;
}
```

### With React Query Mutations

```typescript
import { useMutation } from '@tanstack/react-query';
import toast from '@/src/utils/toast';
import api from '@/src/services/api/client';

function useUpdateProfile() {
  return useMutation({
    mutationFn: (data) => api.put('/profile', data),
    onSuccess: () => {
      toast.success('Profile updated!');
      // Global error handler shows errors automatically
    },
  });
}
```

## 🎨 Toast Types

### Success (Green)
```typescript
toast.success('Data saved successfully!');
```
Use for: Successful operations, completed tasks, confirmations

### Error (Red)
```typescript
toast.error('Failed to load data');
```
Use for: Failed operations, validation errors, network issues

### Info (Blue)
```typescript
toast.info('New features available');
```
Use for: Informational messages, tips, notifications

### Warning (Orange)
```typescript
toast.warning('Storage almost full');
```
Use for: Warnings, deprecations, important notices

## 🤖 Automatic Error Handling

### Already Handled Automatically:
✅ **API Query Errors** - Shows toast automatically via queryClient
✅ **Mutation Errors** - Shows toast automatically via queryClient
✅ **Session Expiry** - Shows "Session expired" toast
✅ **Token Refresh Failures** - Shows login prompt toast
✅ **Network Errors** - Shows connection error toast

### When to Show Manual Toast:
- Form validation errors
- Success confirmations
- User actions (delete, save, etc.)
- Custom business logic errors

## 🎯 Best Practices

### DO:
✅ Use success toasts for user actions (save, delete, update)
✅ Keep messages short and clear (under 50 characters)
✅ Use appropriate toast types for context
✅ Show toasts for important user feedback

### DON'T:
❌ Show toast for every single action (toast fatigue)
❌ Use long messages (users won't read them)
❌ Show multiple toasts simultaneously
❌ Show toast for 401 errors (handled automatically)

## 📱 Platform-Specific Behavior

### iOS
- Appears 60px from top
- Smooth animations
- Auto-hides after duration

### Android
- Appears 60px from top
- Material design animations
- Auto-hides after duration

## 🔧 Customization

To customize toast appearance, edit `src/utils/toastConfig.tsx`:

```typescript
// Change colors, fonts, sizes, etc.
style={{
  borderLeftColor: '#your-color',
  backgroundColor: '#your-bg',
}}
```

## 🐛 Troubleshooting

### Toast not showing?
1. Check that `<Toast />` is in your root layout
2. Verify it's the last component (appears on top)
3. Check console for errors

### Styling issues?
1. Verify `toastConfig` is passed to `<Toast config={toastConfig} />`
2. Check platform-specific styles in toastConfig.tsx

### Multiple toasts?
- Call `toast.hide()` before showing new toast if needed

## 📚 API Reference

### toast.show()
```typescript
toast.show({
  type: 'success' | 'error' | 'info' | 'warning',
  title?: string,
  message: string,
  duration?: number, // milliseconds
  position?: 'top' | 'bottom',
});
```

### Shortcuts
- `toast.success(message, title?)` - Duration: 3s
- `toast.error(message, title?)` - Duration: 4s
- `toast.info(message, title?)` - Duration: 3s
- `toast.warning(message, title?)` - Duration: 4s
- `toast.hide()` - Hide current toast

## 🌟 Examples in Your App

### Login Success
```typescript
toast.success('Welcome back!', 'Login Successful');
```

### Post Created
```typescript
toast.success('Your post is now live!');
```

### Live Stream Started
```typescript
toast.info('You are now live!', 'Stream Started');
```

### Network Error
```typescript
// Handled automatically by queryClient
// But you can customize:
toast.error('Check your internet connection', 'Connection Error');
```

---

**Questions?** Check the implementation in `src/utils/toast.ts` or refer to [react-native-toast-message docs](https://github.com/calintamas/react-native-toast-message).
