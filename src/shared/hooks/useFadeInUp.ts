import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

export function useFadeInUp() {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const translateAnim = useRef(new Animated.Value(14)).current

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        duration: 420,
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        duration: 420,
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start()
  }, [fadeAnim, translateAnim])

  return {
    opacity: fadeAnim,
    transform: [{ translateY: translateAnim }],
  }
}
