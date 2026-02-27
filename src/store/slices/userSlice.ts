import { create } from 'zustand'
import type { AuthUser, UserRole } from '@features/auth/types'

// ─── Store Shape ─────────────────────────────────────────────────────────────

interface UserStore {
  user: AuthUser | null

  // ── Setters ──────────────────────────────────────────
  setUser: (user: AuthUser) => void
  clearUser: () => void
  updateUser: (partial: Partial<AuthUser>) => void

  // ── Role Helper ──────────────────────────────────────
  switchRole: (role: UserRole) => void

  // ── Computed Getters ─────────────────────────────────
  isLoggedIn: () => boolean
  isStreamer: () => boolean
  getProfileId: () => string | null
  
}

// ─── Store ───────────────────────────────────────────────────────────────────

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,

  // ── Sets the full user object after login ─────────────────────────────────
  setUser: (user) => set({ user }),

  // ── Clears user on logout ─────────────────────────────────────────────────
  clearUser: () => set({ user: null }),

  // ── Updates only the fields you pass in ──────────────────────────────────
  // Example: updateUser({ avatarUrl: 'https://...' })
  // Use this after profile edits so you don't have to reset the whole user
  updateUser: (partial) =>
    set((state) => ({
      user: state.user
        ? { ...state.user, ...partial }
        : null,
    })),

  // ── Switches between viewer and streamer role ─────────────────────────────
  // Without clearing the rest of the user data
  switchRole: (role) =>
    set((state) => ({
      user: state.user
        ? { ...state.user, role, isStreamer: role === 'streamer' }
        : null,
    })),

  // ── Returns true if user is logged in ────────────────────────────────────
  // Usage: const loggedIn = useUserStore(state => state.isLoggedIn())
  isLoggedIn: () => !!get().user?.isLoggedIn,

  // ── Returns true if current user is a streamer ───────────────────────────
  // Usage: const streamer = useUserStore(state => state.isStreamer())
  isStreamer: () => get().user?.role === 'streamer',

  // ── Returns profileId or null if no user ─────────────────────────────────
  // Usage: const profileId = useUserStore(state => state.getProfileId())
  getProfileId: () => get().user?.profileId ?? null,
}))