// src/features/auth/components/RegisterStep3.tsx

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Input } from '@shared/components/ui/Input'
import { Button } from '@shared/components/ui/Button'
import { ProgressBar } from '@shared/components/ui/ProgressBar'
import { styles } from '@features/auth/components/styles/RegisterFormStyle'
import { styles as inputStyles } from '@shared/components/ui/style/InputStyle'
import {
  getPasswordConditions,
  isPasswordValid,
} from '@features/auth/utils/authHelpers'
import useRegister from '@features/auth/hooks/useRegister'

interface Props {
  hook: ReturnType<typeof useRegister>
}

const RegisterStep3: React.FC<Props> = ({ hook }) => {
  const {
    step3,
    errors,
    isLoading,
    isPasswordVisible,
    isConfirmPasswordVisible,
    updateStep3,
    goBack,
    handleSubmit,
    togglePassword,
    toggleConfirmPassword,
    currentStep,
    totalSteps,
  } = hook

  // ── Live password conditions — hides when all are met ──
  const passwordConditions = getPasswordConditions(step3.password)
  const allConditionsMet   = isPasswordValid(step3.password)

  return (
    <View>

      {/* ── Line 1: Back arrow ── */}
      <View style={styles.backRow}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      </View>

      {/* ── Line 2: Heading ── */}
      <View style={styles.titleRow}>
        <Text style={styles.pageTitle}>Public Identity 🧑‍🎤</Text>
        <Text style={styles.pageSubtitle}>
          Final step: Set your identity and secure your account.
        </Text>
      </View>

      {/* ── Line 3: Progress bar ── */}
      <View style={styles.progressRow}>
        <View style={styles.progressBar}>
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </View>
      </View>

      {/* ── General Error ── */}
      {errors.general && (
        <View style={styles.generalError}>
          <Text style={styles.generalErrorText}>{errors.general}</Text>
        </View>
      )}

      {/* ── Display Name ── */}
      {/* Condition: letters, numbers, and underscores. Must have at least one letter */}
      <Input
        placeholder="Profile Display Name"
        value={step3.displayName}
        onChangeText={(v) => updateStep3('displayName', v)}
        error={errors.displayName}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* ── Username with @ prefix — only lowercase, numbers, underscores ── */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: '#6B6B6B', fontSize: 16, fontWeight: '600', marginRight: 8 }}>
          @
        </Text>
        <View style={{ flex: 1 }}>
          <Input
            placeholder="username"
            value={step3.username}
            onChangeText={(v) => updateStep3('username', v.toLowerCase())}
            error={errors.username}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>

      {/*
       * ── Streaming ID / User ID (Auto Generated) ────────────────────────────
       *
       * HEADING: "Your Campus Live ID"
       *
       * Currently this ID is generated randomly on the client side using
       * generateStreamingId() in authHelpers.ts (format: CL-XXXXXX).
       *
       * HOW TO CHANGE THIS WHEN BACKEND IS CONNECTED:
       *
       * Option 1 — Backend generates it on register API call:
       *   - Remove generateStreamingId() from useRegister hook
       *   - The backend returns the streamingId in the register response
       *   - Set it in the store: setUser({ ...user, streamingId: response.streamingId })
       *   - Show it on a success screen after registration
       *
       * Option 2 — Generate on the client, backend validates uniqueness:
       *   - Keep generateStreamingId() on the client
       *   - Send it to backend with the register payload
       *   - Backend checks if it already exists in DB
       *   - If duplicate, backend returns a new one
       *   - Update local state with the backend-confirmed ID
       *
       * Option 3 — Use UUID from backend (recommended for production):
       *   - Backend generates a UUID or nanoid
       *   - Format it as CL-XXXXXX on the backend before returning
       *   - This guarantees global uniqueness across all users
       *
       * TO IMPLEMENT: Replace the streamingIdBox below with the
       * backend-confirmed value from the register API response.
       */}
      <Text style={styles.sectionLabel}>Your Campus Live ID</Text>
      <View style={styles.streamingIdWrapper}>
        <View style={styles.streamingIdBox}>
          <Text style={styles.streamingIdText}>{step3.streamingId}</Text>
          <View style={styles.streamingIdBadge}>
            <Text style={styles.streamingIdBadgeText}>Auto Generated</Text>
          </View>
        </View>
      </View>

      {/* ── Password ── */}
      <Input
        placeholder="Password"
        value={step3.password}
        onChangeText={(v) => updateStep3('password', v)}
        error={errors.password}
        secureTextEntry={!isPasswordVisible}
        rightIcon={
          <Text style={inputStyles.eyeText}>
            {isPasswordVisible ? 'Hide' : 'Show'}
          </Text>
        }
        onRightIconPress={togglePassword}
      />

      {/* ── Live Password Conditions ──────────────────────────────────────────
          Shows while user is typing. Disappears automatically when all
          conditions are met. Each condition turns teal + checkmark when fulfilled.
      */}
      {step3.password.length > 0 && !allConditionsMet && (
        <View style={styles.conditionsContainer}>
          <Text style={styles.conditionsTitle}>Password must have:</Text>
          {passwordConditions.map((condition: { met: any; label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined }, index: number) => (
            <View key={index} style={styles.conditionRow}>
              <Text style={styles.conditionIcon}>
                {condition.met ? '✓' : '○'}
              </Text>
              <Text
                style={[
                  styles.conditionText,
                  condition.met
                    ? styles.conditionMet
                    : styles.conditionUnmet,
                ]}
              >
                {condition.label}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* ── Confirm Password ── */}
      <Input
        placeholder="Confirm Password"
        value={step3.confirmPassword}
        onChangeText={(v) => updateStep3('confirmPassword', v)}
        error={errors.confirmPassword}
        secureTextEntry={!isConfirmPasswordVisible}
        rightIcon={
          <Text style={inputStyles.eyeText}>
            {isConfirmPasswordVisible ? 'Hide' : 'Show'}
          </Text>
        }
        onRightIconPress={toggleConfirmPassword}
      />

      {/* ── Create Account ── */}
      <Button
        label="Create your account"
        onPress={handleSubmit}
        isLoading={isLoading}
        style={styles.actionBtn}
      />

    </View>
  )
}

export default RegisterStep3
