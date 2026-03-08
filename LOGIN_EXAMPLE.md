# 🎯 Complete Login Example

## Full Implementation: Login Screen with Auth Service

This is a complete, production-ready example showing how to use the auth service in a real component.

---

## 📁 File Structure

```
app/(auth)/
├── _layout.tsx           → Auth layout wrapper
└── login.tsx             → THIS FILE
src/features/auth/
├── components/
│   └── LoginForm.tsx     → Reusable form component
└── services/
    ├── auth.types.ts     → Types
    ├── auth.ts           → API functions
    └── auth.mutations.ts → React Query hooks
```

---

## 📝 Complete Login Component

### Option 1: Inline Form (Simple)

```tsx
// app/(auth)/login.tsx

import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Link } from 'expo-router';
import { useLoginMutation } from '@/src/features/auth/services/auth.mutations';

export default function LoginScreen() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Use the login mutation hook
  const { mutate: login, isPending, error } = useLoginMutation();

  const handleLogin = () => {
    // Basic validation
    if (!identifier.trim()) {
      toast.error('Please enter email or username');
      return;
    }
    if (!password.trim()) {
      toast.error('Please enter password');
      return;
    }

    // Call mutation - success/error handled automatically
    login({ identifier, password });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        {/* Header */}
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        {/* Identifier Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email or Username"
            value={identifier}
            onChangeText={setIdentifier}
            autoCapitalize="none"
            keyboardType="email-address"
            editable={!isPending}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            editable={!isPending}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        </View>

        {/* Forgot Password Link */}
        <Link href="/forgot-password" asChild>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </Link>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.loginButton, isPending && styles.loginButtonDisabled]}
          onPress={handleLogin}
          disabled={isPending}
        >
          {isPending ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>

        {/* Register Link */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <Link href="/register" asChild>
            <TouchableOpacity>
              <Text style={styles.registerLink}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
  },
  loginButton: {
    height: 56,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonDisabled: {
    backgroundColor: '#B0B0B0',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  registerText: {
    fontSize: 14,
    color: '#666',
  },
  registerLink: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
});
```

---

### Option 2: Separate Form Component (Scalable)

#### Step 1: Create Reusable Form Component

```tsx
// src/features/auth/components/LoginForm.tsx

import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useLoginMutation } from '../services/auth.mutations';
import toast from '@/src/utils/toast';

interface LoginFormProps {
  onSuccess?: () => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
}

export default function LoginForm({
  onSuccess,
  onForgotPassword,
  onSignUp,
}: LoginFormProps) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: login, isPending } = useLoginMutation();

  const handleSubmit = () => {
    // Validation
    if (!identifier.trim()) {
      toast.error('Please enter email or username');
      return;
    }
    if (!password.trim()) {
      toast.error('Please enter password');
      return;
    }
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    // Submit
    login(
      { identifier, password },
      {
        onSuccess: () => {
          onSuccess?.();
        },
      }
    );
  };

  return (
    <View style={styles.container}>
      {/* Identifier Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email or Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email or username"
          value={identifier}
          onChangeText={setIdentifier}
          autoCapitalize="none"
          keyboardType="email-address"
          editable={!isPending}
          returnKeyType="next"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            editable={!isPending}
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Forgot Password */}
      {onForgotPassword && (
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={onForgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      )}

      {/* Submit Button */}
      <TouchableOpacity
        style={[styles.submitButton, isPending && styles.submitButtonDisabled]}
        onPress={handleSubmit}
        disabled={isPending}
      >
        {isPending ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.submitButtonText}>Login</Text>
        )}
      </TouchableOpacity>

      {/* Sign Up Link */}
      {onSignUp && (
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={onSignUp}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
  },
  submitButton: {
    height: 56,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  submitButtonDisabled: {
    backgroundColor: '#B0B0B0',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  signUpText: {
    fontSize: 14,
    color: '#666',
  },
  signUpLink: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
});
```

#### Step 2: Use in Screen

```tsx
// app/(auth)/login.tsx

import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import LoginForm from '@/src/features/auth/components/LoginForm';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        <LoginForm
          onSuccess={() => {
            // Optional: Additional success handling
            console.log('Login successful!');
          }}
          onForgotPassword={() => router.push('/forgot-password')}
          onSignUp={() => router.push('/register')}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
});
```

---

## 🎨 Enhanced with Form Validation

### Using React Hook Form (Recommended for Complex Forms)

```tsx
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Validation schema
const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, 'Email or username is required')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$|^[a-zA-Z0-9_]+$/, 'Invalid format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const { mutate: login, isPending } = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <View>
      <Controller
        control={control}
        name="identifier"
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Email or Username"
          />
        )}
      />
      {errors.identifier && (
        <Text style={styles.error}>{errors.identifier.message}</Text>
      )}

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Password"
            secureTextEntry
          />
        )}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        disabled={isPending}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
```

---

## 🎯 Key Points Demonstrated

### ✅ What This Example Shows:

1. **Using the mutation hook** - `useLoginMutation()`
2. **Loading states** - `isPending` for button disable
3. **Form validation** - Client-side validation before API call
4. **Error handling** - Automatic via queryClient + custom toast
5. **Navigation** - Automatic redirect on success
6. **Token management** - Automatic via mutation hook
7. **Store updates** - Automatic user state update
8. **Toast notifications** - Success/error feedback

### ✅ What Happens Behind the Scenes:

1. User enters credentials
2. Form validation runs
3. `login()` mutation called
4. API request sent with credentials
5. **Request interceptor** adds headers
6. Backend validates and returns tokens
7. **Response interceptor** handles errors (if any)
8. `onSuccess` handler runs:
   - Saves tokens to secure storage
   - Updates Zustand store with user data
   - Shows success toast
   - Navigates to home screen
9. User is logged in!

---

## 📚 Related Files

- **Service Types:** `src/features/auth/services/auth.types.ts`
- **API Functions:** `src/features/auth/services/auth.ts`
- **Mutation Hooks:** `src/features/auth/services/auth.mutations.ts`
- **Query Hooks:** `src/features/auth/services/auth.queries.ts`
- **Toast Utils:** `src/utils/toast.ts`
- **Token Storage:** `src/utils/tokenStorage.ts`
- **Store:** `src/store/slices/userSlice.ts`

---

## 💡 Pro Tips

1. **Keep forms dumb** - All logic in mutation hooks
2. **Validate early** - Check inputs before API call
3. **Show loading states** - Disable buttons during requests
4. **Trust the system** - Errors show automatically
5. **Customize when needed** - Override `onSuccess`/`onError` if needed

---

**This is exactly how you should build every API integration in your app!** 🚀
