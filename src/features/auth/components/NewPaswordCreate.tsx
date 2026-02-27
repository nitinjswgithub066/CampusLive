import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Input } from '@shared/components/ui/Input'
import { Button } from '@shared/components/ui/Button'
import { styles } from '@features/auth/components/styles/ForgotPasswordFormStyle'
import { styles as inputStyles } from '@shared/components/ui/style/InputStyle'
import useForgotPassword from '@features/auth/hooks/useForgotPassword'

interface Props {
  hook: ReturnType<typeof useForgotPassword>
}

const NewPaswordCreate: React.FC<Props> = ({ hook }) => {
  const {
    newPassword,
    confirmPassword,
    errors,
    isLoading,
    isPasswordVisible,
    isConfirmVisible,
    passwordConditions,
    allConditionsMet,
    setNewPassword,
    setConfirmPassword,
    goBack,
    handleStep3,
    handleMaybeLater,
    togglePassword,
    toggleConfirmPassword,
  } = hook

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
        <Text style={styles.pageTitle}>Set a New Secret 🔑</Text>
      </View>

      {/* ── Line 3: Subtitle ── */}
      <View style={styles.subtitleRow}>
        <Text style={styles.subtitle}>
          Make it strong and memorable to keep your account safe
        </Text>
      </View>

      {/* ── General Error ── */}
      {errors.general && (
        <View style={styles.generalError}>
          <Text style={styles.generalErrorText}>{errors.general}</Text>
        </View>
      )}

      {/* ── New Password ── */}
      <Input
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        error={errors.newPassword}
        secureTextEntry={!isPasswordVisible}
        rightIcon={
          <Text style={inputStyles.eyeText}>
            {isPasswordVisible ? 'Hide' : 'Show'}
          </Text>
        }
        onRightIconPress={togglePassword}
      />

      {/* ── Live Password Conditions ──────────────────────────────────────────
          Same conditions as RegisterStep3.
          Shows while user types. Disappears when all conditions are met.
          Each condition turns teal + checkmark when fulfilled.
          No strength bar — removed for cleaner look as per design spec.
      */}
      {newPassword.length > 0 && !allConditionsMet && (
        <View style={styles.conditionsContainer}>
          <Text style={styles.conditionsTitle}>Password must have:</Text>
          {passwordConditions.map((condition, index) => (
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

      {/* ── Confirm New Password ── */}
      <Input
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        error={errors.confirmPassword}
        secureTextEntry={!isConfirmVisible}
        rightIcon={
          <Text style={inputStyles.eyeText}>
            {isConfirmVisible ? 'Hide' : 'Show'}
          </Text>
        }
        onRightIconPress={toggleConfirmPassword}
      />

      {/* ── Continue ── */}
      <Button
        label="Continue"
        onPress={handleStep3}
        isLoading={isLoading}
        style={styles.actionBtn}
      />

      {/* ── Maybe Later ── */}
      {/* Exits recovery flow and returns to login without making changes */}
      <TouchableOpacity
        style={styles.maybeLaterRow}
        onPress={handleMaybeLater}
        activeOpacity={0.7}
      >
        <Text style={styles.maybeLaterText}>Maybe Later</Text>
      </TouchableOpacity>

    </View>
  )
}

export default NewPaswordCreate