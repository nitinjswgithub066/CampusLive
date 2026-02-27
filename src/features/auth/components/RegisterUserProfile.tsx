// src/features/auth/components/RegisterUserProfile.tsx

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
  type PasswordCondition,
} from '@features/auth/utils/authHelpers'
import useRegister from '@features/auth/hooks/useRegister'
import BackButton from '@/src/shared/components/ui/BackButton'

interface Props {
  hook: ReturnType<typeof useRegister>
}

const RegisterUserProfile: React.FC<Props> = ({ hook }) => {
  const {
    step3,
    errors,
    touched,
    isLoading,
    isPasswordVisible,
    isConfirmPasswordVisible,
    isTermsAccepted,
    updateStep3,
    markTouched,
    goBack,
    handleSubmit,
    togglePassword,
    toggleConfirmPassword,
    setIsTermsAccepted,
    clearError,
    currentStep,
    totalSteps,
  } = hook

  const passwordConditions: PasswordCondition[] = getPasswordConditions(step3.password)
  const allConditionsMet = isPasswordValid(step3.password)

  return (
    <View>

      {/* ── Line 1: Back arrow ── */}
      <View style={[styles.backRow, styles.backButton]}>
         <BackButton onPress={goBack} />
      </View>

      {/* ── Line 2: Heading ── */}
      <View style={styles.titleRow}>
        <Text style={styles.pageTitle}>Make It Yours ✨</Text>
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
      <Input
        placeholder="Profile Display Name"
        value={step3.displayName}
        onChangeText={(v) => updateStep3('displayName', v)}
        onBlur={() => markTouched('displayName')}
        error={touched.displayName ? errors.displayName : undefined}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* ── Username with @ prefix ── */}
      <Input
        placeholder="username"
        value={step3.username}
        onChangeText={(v) => updateStep3('username', v.toLowerCase())}
        onBlur={() => markTouched('username')}
        error={touched.username ? errors.username : undefined}
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={<Text style={inputStyles.prefixText}>@</Text>}
      />

      {/* ── Streaming ID ── */}
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
        onBlur={() => markTouched('password')}
        error={touched.password ? errors.password : undefined}
        secureTextEntry={!isPasswordVisible}
        rightIcon={
          <Text style={inputStyles.eyeText}>
            {isPasswordVisible ? 'Hide' : 'Show'}
          </Text>
        }
        onRightIconPress={togglePassword}
      />

      {/* ── Live Password Conditions ── */}
      {step3.password.length > 0 && !allConditionsMet && (
        <View style={styles.conditionsContainer}>
          <Text style={styles.conditionsTitle}>Password must have:</Text>
          {passwordConditions.map((condition: PasswordCondition, index: number) => (
            <View key={index} style={styles.conditionRow}>
              <Text style={styles.conditionIcon}>
                {condition.met ? '✓' : '○'}
              </Text>
              <Text style={[
                styles.conditionText,
                condition.met ? styles.conditionMet : styles.conditionUnmet,
              ]}>
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
        onBlur={() => markTouched('confirmPassword')}
        error={touched.confirmPassword ? errors.confirmPassword : undefined}
        secureTextEntry={!isConfirmPasswordVisible}
        rightIcon={
          <Text style={inputStyles.eyeText}>
            {isConfirmPasswordVisible ? 'Hide' : 'Show'}
          </Text>
        }
        onRightIconPress={toggleConfirmPassword}
      />

      {/* ── Terms & Conditions ── */}
      <TouchableOpacity
        style={styles.termsRow}
        onPress={() => {
          setIsTermsAccepted(!isTermsAccepted)
          clearError('terms')
        }}
        activeOpacity={0.8}
      >
        <View style={[
          styles.checkbox,
          isTermsAccepted && styles.checkboxChecked,
          (touched.terms && errors.terms && !isTermsAccepted)
            ? styles.checkboxError
            : null,
        ]}>
          {isTermsAccepted && (
            <Text style={styles.checkboxTick}>✓</Text>
          )}
        </View>

        <Text style={styles.termsText}>
          I agree to the{' '}
          <Text
            style={styles.termsLink}
            onPress={() => {
              // TODO: router.push('/(app)/terms-and-conditions')
            }}
          >
            Terms & Conditions
          </Text>
          {' '}and{' '}
          <Text
            style={styles.termsLink}
            onPress={() => {
              // TODO: router.push('/(app)/privacy-policy')
            }}
          >
            Privacy Policy
          </Text>
        </Text>
      </TouchableOpacity>

      {/* Terms error — only shows after submit attempt */}
      {touched.terms && errors.terms && (
        <Text style={styles.termsErrorText}>{errors.terms}</Text>
      )}

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

export default RegisterUserProfile