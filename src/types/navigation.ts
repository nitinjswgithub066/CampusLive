import type { Href } from 'expo-router'

// Central route names used by the auth foundation.
// Update this file when adding, renaming, or deleting app routes.
// Keeping route names typed helps production apps catch broken navigation early.
export const routes = {
  onboarding: '/(auth)/onboarding',
  welcome: '/(auth)/welcome',
  login: '/(auth)/login',
  emailLogin: '/(auth)/email-login',
  register: '/(auth)/register',
  home: '/(app)/(tabs)/index',
} as const satisfies Record<string, Href>

export type AppRouteName = keyof typeof routes
export type AppRoute = (typeof routes)[AppRouteName]
