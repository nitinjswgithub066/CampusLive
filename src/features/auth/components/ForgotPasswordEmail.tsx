// src/features/auth/components/ForgotPasswordEmail.tsx

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Input } from '@shared/components/ui/Input'
import { Button } from '@shared/components/ui/Button'
import { styles } from '@features/auth/components/styles/ForgotPasswordFormStyle'
import useForgotPassword from '@features/auth/hooks/useForgotPassword'
import BackButton from '@shared/components/ui/BackButton'

interface Props {
  hook: ReturnType<typeof useForgotPassword>
}

const ForgotPasswordEmail: React.FC<Props> = ({ hook }) => {
  const {
    identifier,
    errors,
    isLoading,
    touched,
    setIdentifier,
    markTouched,
    goBack,
    handleStep1,
  } = hook

  return (
    <View>

      {/* ── Line 1: Back arrow ── */}
      <View style={[styles.backRow, styles.backbutton]}>
         <BackButton onPress={goBack} />
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
      {/* Accepts email, username or mobile number in one field */}
      <Input
        placeholder="Email, Username or Mobile Number"
        value={identifier}
        onChangeText={(v) => {
          setIdentifier(v)
          if (touched.identifier) {
            // clear error while typing after first touch
          }
        }}
        onBlur={() => markTouched('identifier')}
        error={touched.identifier ? errors.identifier : undefined}
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

    </View>
  )
}

export default ForgotPasswordEmail