// app/index.tsx

import { Redirect } from 'expo-router'
import { useUserStore } from '@store/useStore'

export default function Index() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn())

  if (isLoggedIn) {
    return <Redirect href="/(app)/(tabs)" />
  }

  return <Redirect href="/(auth)" />
}