# Backend Integration Checklist

## ✅ Frontend Changes Completed

### Updated Files:
1. **`src/features/auth/hooks/useLogin.ts`**
   - Removed dummy authentication logic
   - Integrated `useLoginMutation()` hook
   - Now calls real API endpoint
   - Handles loading state from mutation

2. **Login Flow:**
   - Form validation happens locally (before API call)
   - Success: Saves tokens → Updates Zustand store → Shows toast → Navigates to tabs
   - Error: Automatically shows toast notification with error message

---

## 🔧 Backend Requirements

### 1. **Login Endpoint** ⚠️ REQUIRED

**Endpoint:** `POST /auth/login`

**Request Headers:**
```http
Content-Type: application/json
```

**Request Body:**
```json
{
  "identifier": "user@example.com",  // Can be email, username, or mobile
  "password": "SecurePass123"
}
```

**Success Response (200):**
```json
{
  "data": {
    "user": {
      "id": "uuid-string",
      "username": "john_doe",
      "email": "john@example.com",
      "mobileNumber": "+1234567890",
      "profileId": "profile_uuid",
      "avatarUrl": "https://example.com/avatar.jpg",
      "role": "viewer",  // or "creator"
      "isStreamer": false
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
  },
  "status": 200,
  "message": "Login successful"
}
```

**Error Response (400/401):**
```json
{
  "data": null,
  "status": 401,
  "message": "Invalid credentials"
}
```

**Important Notes:**
- ✅ Response MUST include both `accessToken` and `refreshToken`
- ✅ User object MUST include all fields shown above
- ✅ Status code in response body must match HTTP status code
- ✅ Message field is displayed to user in toast notification

---

### 2. **Token Refresh Endpoint** ⚠️ CRITICAL

**Endpoint:** `POST /auth/refresh-token`

**Request Headers:**
```http
Content-Type: application/json
```

**Request Body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Success Response (200):**
```json
{
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs..."  // Optional: new refresh token
  },
  "status": 200,
  "message": "Token refreshed successfully"
}
```

**Error Response (401):**
```json
{
  "data": null,
  "status": 401,
  "message": "Invalid refresh token"
}
```

**Important Notes:**
- ✅ Called automatically when API returns 401 Unauthorized
- ✅ Uses queue system to prevent multiple refresh requests
- ✅ If refresh fails, user is logged out automatically
- ⚠️ Endpoint path must be set in `src/types/apiPath.ts` as `AUTH_ENDPOINTS.REFRESH_TOKEN`

---

### 3. **CORS Configuration** ⚠️ REQUIRED

Your backend MUST allow requests from your Expo app:

```javascript
// Example for Node.js/Express
app.use(cors({
  origin: [
    'http://localhost:8081',        // Expo dev server
    'exp://192.168.x.x:8081',       // Expo Go
    'http://192.168.x.x:8081',      // LAN testing
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
```

**For Production:**
- Add your production domain to `origin` array
- Use secure HTTPS URLs only

---

### 4. **Protected API Endpoints**

All protected endpoints should:

**Request Headers:**
```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
Content-Type: application/json
```

**Error Response (401 - Invalid/Expired Token):**
```json
{
  "data": null,
  "status": 401,
  "message": "Unauthorized"
}
```

**Frontend Behavior:**
1. Receives 401 error
2. Automatically calls refresh token endpoint
3. Retries original request with new token
4. If refresh fails → Logs out user

---

## 📋 Environment Variables

Add to your `.env` file:

```env
# Your backend API base URL
EXPO_PUBLIC_API_URL=http://192.168.x.x:3000/api/v1

# Or for production
# EXPO_PUBLIC_API_URL=https://api.campuslive.com/api/v1
```

**Important:**
- ⚠️ Use your computer's LOCAL IP (not localhost/127.0.0.1) for testing on physical device
- ⚠️ Backend must be accessible from your device's network
- Find your IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)

---

## 🔍 Testing the Integration

### Step 1: Start Your Backend
```bash
# Make sure your backend is running on the network
npm run dev
# or
yarn dev
```

### Step 2: Update API URL
1. Find your computer's local IP address
2. Update `.env` file with correct IP and port
3. Restart Expo dev server

### Step 3: Test Login
1. Open app on device/emulator
2. Enter credentials in login form
3. Press "Log In"

**Expected Behavior:**
- ✅ Loading spinner shows on button
- ✅ Request sent to your backend
- ✅ On Success: Green toast → Navigate to tabs
- ✅ On Error: Red toast with backend error message

### Step 4: Check Network Tab
```bash
# In Expo dev tools, check network requests
# Or use React Native Debugger to see API calls
```

---

## 🐛 Common Issues & Solutions

### Issue 1: "Network Error" or "Request Failed"
**Cause:** Frontend can't reach backend

**Solutions:**
- ✅ Make sure backend is running
- ✅ Use local IP instead of localhost
- ✅ Disable firewall temporarily
- ✅ Check if phone and computer are on same WiFi

### Issue 2: CORS Error
**Cause:** Backend rejecting frontend requests

**Solutions:**
- ✅ Add CORS middleware to backend
- ✅ Add your Expo dev server URL to allowed origins
- ✅ Enable credentials in CORS config

### Issue 3: "Cannot read property 'user' of undefined"
**Cause:** Backend response doesn't match expected structure

**Solutions:**
- ✅ Verify response includes `data.user` object
- ✅ Check all user fields are present
- ✅ Ensure accessToken and refreshToken are included

### Issue 4: Login works but refreshes page
**Cause:** Token refresh endpoint not implemented

**Solutions:**
- ✅ Implement `/auth/refresh-token` endpoint
- ✅ Update `AUTH_ENDPOINTS.REFRESH_TOKEN` in `src/types/apiPath.ts`
- ✅ Verify refresh token endpoint returns correct format

### Issue 5: User logged out when app restarts
**Cause:** Zustand store not persisted

**Solution:**
- ⚠️ This is a known issue documented in `STORE_ANALYSIS.md`
- ⚠️ Needs implementation of Zustand persistence middleware
- Current behavior: Tokens saved securely, store rehydrates on login

---

## 📊 API Request Flow Diagram

```
User enters credentials → LoginForm validates locally
                              ↓
                    Calls useLoginMutation()
                              ↓
                    POST /auth/login
                              ↓
                Backend authenticates user
                              ↓
                    Returns tokens + user data
                              ↓
        Frontend saves tokens to SecureStore
                              ↓
        Updates Zustand store (setUser)
                              ↓
        Shows success toast
                              ↓
        Navigates to /(app)/(tabs)
```

---

## 🔐 Security Considerations

1. **Tokens:**
   - ✅ Stored in expo-secure-store (encrypted)
   - ✅ Never logged to console in production
   - ✅ Automatically added to all API requests

2. **Password:**
   - ⚠️ Sent over HTTPS only (use HTTPS in production!)
   - ⚠️ Backend should hash passwords (bcrypt recommended)
   - ⚠️ Implement rate limiting on login endpoint

3. **Token Expiry:**
   - ✅ Access token expires (your backend sets this)
   - ✅ Refresh token has longer expiry
   - ✅ Frontend auto-refreshes on 401

---

## ✅ Backend Checklist

Before testing, verify:

- [ ] `/auth/login` endpoint implemented
- [ ] `/auth/refresh-token` endpoint implemented
- [ ] CORS configured to allow Expo dev server
- [ ] Response structure matches frontend expectations
- [ ] Both accessToken and refreshToken returned
- [ ] User object contains all required fields
- [ ] Protected endpoints check Authorization header
- [ ] 401 responses trigger token refresh on frontend
- [ ] Backend running and accessible from device network

---

## 📝 Next Steps

Once login is working:

1. **Test with real backend:** Use actual credentials
2. **Test token refresh:** Wait for token to expire or manually invalidate
3. **Implement other auth endpoints:** 
   - Register (`POST /auth/register`)
   - Forgot Password (`POST /auth/forgot-password`)
   - Reset Password (`POST /auth/reset-password`)
4. **Add store persistence:** See `STORE_ANALYSIS.md`
5. **Add protected API calls:** All other endpoints will auto-use tokens

---

## 🆘 Need Help?

**Check these files:**
- `LOGIN_EXAMPLE.md` - Frontend usage examples
- `SERVICE_CREATION_GUIDE.md` - How to add new endpoints
- `API_PATTERNS_COMPARISON.md` - Backend response patterns
- `TOAST_GUIDE.md` - Error notification system
- `STORE_ANALYSIS.md` - User state management

**Debug Mode:**
```typescript
// Temporarily add console logs to see what's happening
// In src/services/api/interceptors.ts (request interceptor)
console.log('Sending request to:', config.url);
console.log('With token:', token);

// In src/features/auth/services/auth.mutations.ts (onSuccess)
console.log('Login response:', data);
```

**Remember:** Remove console.logs before committing to Git!
