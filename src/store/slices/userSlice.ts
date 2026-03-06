import { create } from 'zustand'
import type { AuthUser } from '@features/auth/types'

// State (data) and Actions (functions)

interface UserState {
  user: AuthUser | null
}

interface UserActions {
  setUser: (user: AuthUser) => void
  clearUser: () => void
  updateUser: (partial: Partial<AuthUser>) => void
  isLoggedIn: () => boolean
  isStreamer: () => boolean
  getProfileId: () => string | null
}

type UserStore = UserState & UserActions

export const useUserStore = create<UserStore>()((set, get) => ({

  user: null,

  // Stores the full user object after login
  setUser: (user) => set({ user }),

  // Wipes user on logout
  clearUser: () => set({ user: null }),

  // Merges partial fields — use after profile edits e.g. updateUser({ avatarUrl: '...' })
  updateUser: (partial) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...partial } : null,
    })),

  // True if a user object exists in the store (clearUser handles logout)
  isLoggedIn: () => !!get().user,

  // True if backend marked this user as a streamer — always false for viewers
  isStreamer: () => get().user?.isStreamer ?? false,

  // Returns profileId or null
  getProfileId: () => get().user?.profileId ?? null,

}))

// Selector hooks — use these in components to avoid wasted re-renders
export const useCurrentUser = () => useUserStore((s) => s.user)
export const useIsLoggedIn = () => useUserStore((s) => s.isLoggedIn())
export const useIsStreamer = () => useUserStore((s) => s.isStreamer())
export const useProfileId = () => useUserStore((s) => s.getProfileId())