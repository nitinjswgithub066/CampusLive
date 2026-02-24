import { useEffect, useState } from 'react'
import { Slot, router } from 'expo-router'
import { useUserStore } from '@store/useStore'

export default function RootLayout() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn())
  const [isLayoutReady, setIsLayoutReady] = useState(false)

  // Step 1 — wait for layout to mount before any navigation
  useEffect(() => {
    setIsLayoutReady(true)
  }, [])

  // Step 2 — only navigate after layout is confirmed ready
  useEffect(() => {
    if (!isLayoutReady) return

    if (isLoggedIn) {
      router.replace('/(app)/(tabs)/index' as any)
    } else {
      router.replace('/(auth)/index' as any)
    }
  }, [isLayoutReady, isLoggedIn])

  // Step 3 — always render Slot first so layout mounts properly
  return <Slot />
}