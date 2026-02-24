import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Input } from '@shared/components/ui/Input'
import { Button } from '@shared/components/ui/Button'
import { styles } from '@features/auth/components/styles/ForgotPasswordFormStyle'
import useForgotPassword from '@features/auth/hooks/useForgotPassword'

interface Props {
  hook: ReturnType<typeof useForgotPassword>
}

const ForgotStep1: React.FC<Props> = ({ hook }) => {
  const {
    identifier,
    errors,
    isLoading,
    setIdentifier,
    goBack,
    handleStep1,
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
        <Text style={styles.pageTitle}>Find Your Profile 🔍</Text>
      </View>

      {/* ── Line 3: Subtitle ── */}
      <View style={styles.subtitleRow}>
        <Text style={styles.subtitle}>
          Enter your details to get back into the action
        </Text>
      </View>

      {/* ── General Error ── */}
      {errors.general && (
        <View style={styles.generalError}>
          <Text style={styles.generalErrorText}>{errors.general}</Text>
        </View>
      )}

      {/* ── Identifier Input ── */}
      <Input
        placeholder="Email, Username or User ID"
        value={identifier}
        onChangeText={setIdentifier}
        error={errors.identifier}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />

      {/* ── Continue ── */}
      <Button
        label="Continue"
        onPress={handleStep1}
        isLoading={isLoading}
        style={styles.actionBtn}
      />

      {/* ── Try another way ── */}
      <TouchableOpacity
        style={styles.tryAnotherRow}
        onPress={() => {
          // TODO: router.push('/(auth)/phone-recovery')
          // Phone-based recovery screen — to be built when backend is ready
        }}
        activeOpacity={0.7}
      >
        <Text style={styles.tryAnotherText}>Try another way</Text>
      </TouchableOpacity>

    </View>
  )
}

export default ForgotStep1