// src/features/auth/components/ForgotPasswordOtp.tsx

import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { Button } from '@shared/components/ui/Button'
import { styles } from '@features/auth/components/styles/ForgotPasswordFormStyle'
import Colors from '@constants/colors'
import useForgotPassword from '@features/auth/hooks/useForgotPassword'
import BackButton from '@shared/components/ui/BackButton'

interface Props {
  hook: ReturnType<typeof useForgotPassword>
}

const ForgotPasswordOtp: React.FC<Props> = ({ hook }) => {
  const {
    otp,
    errors,
    isLoading,
    canResend,
    formattedTimer,
    identifier,
    setOtp,
    goBack,
    handleStep2,
    handleResend,
  } = hook

  const [isFocused, setIsFocused] = React.useState(false)

  // ── Detect identifier type for dynamic subtitle ────────────────────────────
  const getSubtitle = () => {
    const id = identifier.trim()
    if (/^[6-9]\d{9}$/.test(id)) {
      return `We've sent a 6-digit code to +91 ${id}`
    }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(id)) {
      return `We've sent a 6-digit code to ${id}`
    }
    return "We've sent a 6-digit code to your registered contact"
  }

  return (
    <View>

      {/* ── Line 1: Back arrow ── */}
      <View style={[styles.backRow, styles.backbutton]}>
         <BackButton onPress={goBack} />
      </View>

      {/* ── Line 2: Heading ── */}
      <View style={styles.titleRow}>
        <Text style={styles.pageTitle}>Secure Your Account 🔐</Text>
      </View>

      {/* ── Line 3: Subtitle — changes based on what user entered ── */}
      <View style={styles.subtitleRow}>
        <Text style={styles.subtitle}>{getSubtitle()}</Text>
      </View>

      {/* ── General Error ── */}
      {errors.general && (
        <View style={styles.generalError}>
          <Text style={styles.generalErrorText}>{errors.general}</Text>
        </View>
      )}

      {/* ── OTP Input with live countdown timer on the right ── */}
      <View style={styles.otpWrapper}>
        <View style={[
          styles.otpBox,
          isFocused && styles.otpBoxFocused,
          errors.otp ? { borderColor: Colors.error } : null,
        ]}>
          <TextInput
            style={styles.otpInput}
            value={otp}
            onChangeText={(v) => {
              setOtp(v.replace(/[^0-9]/g, '').slice(0, 6))
            }}
            placeholder="——————"
            placeholderTextColor={Colors.textMuted}
            keyboardType="number-pad"
            maxLength={6}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* ── Countdown timer — right side of OTP box ── */}
          <Text style={[
            styles.timerText,
            canResend && styles.timerExpired,
          ]}>
            {formattedTimer}
          </Text>
        </View>

        {/* ── OTP error below box ── */}
        {errors.otp && (
          <Text style={styles.otpError}>
            {errors.otp}
          </Text>
        )}
      </View>

      {/* ── Resend row ── */}
      {/* Grey and disabled while timer is active */}
      {/* Turns teal and tappable when timer hits 00:00 */}
      <View style={styles.resendRow}>
        <Text style={styles.resendLabel}>Did not receive the code?</Text>
        <TouchableOpacity
          onPress={handleResend}
          disabled={!canResend}
          activeOpacity={canResend ? 0.7 : 1}
        >
          <Text style={canResend ? styles.resendActive : styles.resendInactive}>
            Resend Code
          </Text>
        </TouchableOpacity>
      </View>

      {/* ── Continue ── */}
      <Button
        label="Continue"
        onPress={handleStep2}
        isLoading={isLoading}
        style={styles.actionBtn}
      />

    </View>
  )
}

export default ForgotPasswordOtp
