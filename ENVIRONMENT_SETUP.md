# Environment Configuration Guide

## Current Setup

Your app now uses **app.config.js** (not app.json) for multi-environment support.

## Environment Variables

The app uses environment variables from `.env` file:

```env
EXPO_PUBLIC_API_URL=http://192.168.29.145:4001
```

**Important:** 
- Variables prefixed with `EXPO_PUBLIC_` are available in your app code via `process.env.EXPO_PUBLIC_*`
- They are embedded at build time
- For local development on device, use your computer's local IP (not localhost)

## Multi-Environment Setup

To switch between environments, set the `APP_ENV` variable:

### Development (Default)
```env
APP_ENV=development
EXPO_PUBLIC_API_URL=http://192.168.29.145:4001
```

**App Name:** CampusLive Dev  
**Package:** com.campuslive.dev

### Preprod
```env
APP_ENV=preprod
EXPO_PUBLIC_API_URL=https://preprod-api.campuslive.com
```

**App Name:** CampusLive Preprod  
**Package:** com.campuslive.preprod

### Production
```env
APP_ENV=production
EXPO_PUBLIC_API_URL=https://api.campuslive.com
```

**App Name:** CampusLive  
**Package:** com.campuslive

## File Structure

```
├── .env                    # Your local environment variables (gitignored)
├── .env.example            # Template for required variables
├── app.config.js           # Dynamic Expo configuration
└── src/
    └── services/api/
        ├── client.ts       # Uses EXPO_PUBLIC_API_URL
        └── interceptors.ts # Uses EXPO_PUBLIC_API_URL
```

## API URL Usage in Code

All API calls use `process.env.EXPO_PUBLIC_API_URL`:

```typescript
// src/services/api/client.ts
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

// src/services/api/interceptors.ts  
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

// src/features/auth/services/auth.ts
const baseUrl = `${process.env.EXPO_PUBLIC_API_URL}${AUTH_ENDPOINTS.LOGIN}`;
```

## Building for Different Environments

### Development Build
```bash
# Using .env file
npx expo start --dev-client

# Or set inline
APP_ENV=development npx expo start --dev-client
```

### Preprod Build
```bash
# Update .env first:
# APP_ENV=preprod
# EXPO_PUBLIC_API_URL=https://preprod-api.campuslive.com

eas build --profile development --platform android
```

### Production Build
```bash
# Update .env first:
# APP_ENV=production
# EXPO_PUBLIC_API_URL=https://api.campuslive.com

eas build --profile production --platform android
```

## Troubleshooting

### Environment variables not updating?
1. Stop the dev server
2. Clear cache: `npx expo start --clear`
3. Restart the app

### Different API URL per environment?
Create separate .env files:
```bash
.env.development
.env.preprod
.env.production
```

Then load them based on APP_ENV:
```bash
# Development
cp .env.development .env
npx expo start

# Preprod
cp .env.preprod .env
eas build --profile development
```

## Key Changes Made

1. ✅ **Renamed** `app.config.json` → `app.config.js` (JSON can't have JS functions)
2. ✅ **Standardized** API URL to use `EXPO_PUBLIC_API_URL` everywhere
3. ✅ **Fixed** icon path to match actual file: `app-icon.jpeg`
4. ✅ **Removed** `app.json` (app.config.js takes precedence)
5. ✅ **Updated** `.env` file to use correct variable name
6. ✅ **Created** `.env.example` template

## No Breaking Changes

All existing code continues to work:
- ✅ Auth services still call correct endpoints
- ✅ API client still uses environment variable
- ✅ Interceptors still work with token refresh
- ✅ TypeScript compilation passes

Your app is now properly configured for multi-environment deployment! 🎉
