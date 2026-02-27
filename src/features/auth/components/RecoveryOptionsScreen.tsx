// src/features/auth/components/RecoveryOptionsScreen.tsx

import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles/RecoveryOptionsScreenStyle'

// ─── Recovery option data ─────────────────────────────────────────────────────

const RECOVERY_OPTIONS = [
  {
    id:          'email',
    icon:        '✉️',
    title:       'Email, Username or User ID',
    description: "We'll send a verification code to your registered email address.",
    onPress:     () => router.push('/(auth)/forgot-password' as any),
  },
  {
    id:          'mobile',
    icon:        '📱',
    title:       'Mobile Number',
    description: "We'll send a 6-digit OTP to your registered mobile number.",
    onPress:     () => router.push('/(auth)/forgot-password-mobile' as any),
  },
  {
    id:          'password',
    icon:        '🔑',
    title:       'Use Password Instead',
    description: "Remember your password? Go back and log in directly.",
    onPress:     () => router.push('/(auth)/login' as any), 
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

const RecoveryOptionsScreen = () => {
  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'left', 'right']}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* ── Line 1: Back arrow ── */}
        <View style={styles.backRow}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
        </View>

        {/* ── Line 2: Heading ── */}
        <Text style={styles.heading}>Try Another Way 🔓</Text>

        {/* ── Line 3: Subheading ── */}
        <Text style={styles.subheading}>
          Choose how you'd like to recover access to your Campus Live account.
        </Text>

        {/* ── Options ── */}
        <View style={styles.optionsContainer}>
          {RECOVERY_OPTIONS.map((option, index) => (
            <React.Fragment key={option.id}>
              <TouchableOpacity
                style={styles.optionCard}
                onPress={option.onPress}
                activeOpacity={0.75}
              >
                {/* Icon circle */}
                <View style={styles.iconCircle}>
                  <Text style={styles.iconText}>{option.icon}</Text>
                </View>

                {/* Text content */}
                <View style={styles.optionContent}>
                  <Text style={styles.optionTitle}>{option.title}</Text>
                  <Text style={styles.optionDescription}>{option.description}</Text>
                </View>

                {/* Right arrow */}
                <Text style={styles.arrowText}>›</Text>
              </TouchableOpacity>

              {/* Divider between cards — not after last one */}
              {index < RECOVERY_OPTIONS.length - 1 && (
                <View style={styles.cardDivider} />
              )}
            </React.Fragment>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default RecoveryOptionsScreen
