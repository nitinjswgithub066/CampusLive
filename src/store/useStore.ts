// Central export — always import store hooks from here, not from slice paths

export { useUserStore, useCurrentUser, useIsLoggedIn, useIsStreamer, useProfileId } from './slices/userSlice'

// export { useStreamStore }       from './slices/streamSlice'
// export { useNotificationStore } from './slices/notificationSlice'