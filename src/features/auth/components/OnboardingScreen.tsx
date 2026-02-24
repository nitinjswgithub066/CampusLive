import React, { useEffect, useRef } from 'react'
import {
  View,
  Text,
  Animated,
  StatusBar,
} from 'react-native'
import { router } from 'expo-router'
import { styles } from '@features/auth/components/styles/OnboardingStyle'

const NAVIGATE_AFTER_MS = 2400

const OnboardingScreen = () => {
  // ─── Animation Values ──────────────────────────────────────────────────────
  const logoScale   = useRef(new Animated.Value(0.6)).current
  const logoOpacity = useRef(new Animated.Value(0)).current
  const textOpacity = useRef(new Animated.Value(0)).current
  const textTranslate = useRef(new Animated.Value(20)).current

  useEffect(() => {
    // ── Step 1: Logo springs in ──
    Animated.parallel([
      Animated.spring(logoScale, {
        toValue: 1,
        tension: 60,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start()

    // ── Step 2: Brand name fades up after logo settles ──
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(textTranslate, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start()
    }, 300)

    // ── Step 3: Navigate to login after splash ──
    const timer = setTimeout(() => {
      router.replace('/(auth)/login' as any)
    }, NAVIGATE_AFTER_MS)

    // cleanup — if component unmounts before timer fires, cancel it
    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      {/* ── Animated Logo ── */}
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}
      >
        <View style={styles.logoCircle}>
          {/* Four aperture/shutter segments */}
          <View style={[styles.segment, styles.segTL]} />
          <View style={[styles.segment, styles.segTR]} />
          <View style={[styles.segment, styles.segBR]} />
          <View style={[styles.segment, styles.segBL]} />

          {/* Play button in the center */}
          <View style={styles.playCenter}>
            <View style={styles.playTriangle} />
          </View>
        </View>
      </Animated.View>

      {/* ── Animated Brand Name ── */}
      <Animated.View
        style={[
          styles.brandContainer,
          {
            opacity: textOpacity,
            transform: [{ translateY: textTranslate }],
          },
        ]}
      >
        <View style={styles.brandRow}>
          <Text style={styles.brandCampus}>Campus</Text>
          <Text style={styles.brandLive}> Live</Text>
        </View>
      </Animated.View>

    </View>
  )
}

export default OnboardingScreen