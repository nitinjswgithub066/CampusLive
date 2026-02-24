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

interface Props {
  hook: ReturnType<typeof useForgotPassword>
}

const ForgotStep2: React.FC<Props> = ({ hook }) => {
  const {
    otp,
    errors,
    isLoading,
    canResend,
    formattedTimer,
    setOtp,
    goBack,
    handleStep2,
    handleResend,
  } = hook

  const [isFocused, setIsFocused] = React.useState(false)

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
        <Text style={styles.pageTitle}>Secure Your Account 🔐</Text>
      </View>

      {/* ── Line 3: Subtitle ── */}
      <View style={styles.subtitleRow}>
        <Text style={styles.subtitle}>
          We've sent a unique 6-digit code to your inbox
        </Text>
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
            onChangeText={(v) => setOtp(v.replace(/[^0-9]/g, '').slice(0, 6))}
            placeholder="——————"
            placeholderTextColor={Colors.textMuted}
            keyboardType="number-pad"
            maxLength={6}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* Countdown timer — right side of OTP box */}
          <Text style={[
            styles.timerText,
            canResend && styles.timerExpired,
          ]}>
            {formattedTimer}
          </Text>
        </View>

        {/* Error below OTP box */}
        {errors.otp && (
          <Text style={{ color: Colors.error, fontSize: 11, marginTop: 4, marginLeft: 4 }}>
            {errors.otp}
          </Text>
        )}
      </View>

      {/* ── Resend row ── */}
      {/* Resend text is muted/grey while timer is active */}
      {/* Turns teal and becomes tappable when timer hits 00:00 */}
      <View style={styles.resendRow}>
        <Text style={styles.resendLabel}>Didn't receive the code?</Text>
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

export default ForgotStep2