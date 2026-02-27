// src/features/auth/components/LoginForm.tsx

import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { Input } from '@shared/components/ui/Input'
import { Button } from '@shared/components/ui/Button'
import { Dropdown } from '@shared/components/ui/Dropdown'
import { INDIAN_LANGUAGES } from '@features/auth/utils/authHelpers'
import type { DropdownOption } from '@shared/components/ui/Dropdown'
import useLogin from '@features/auth/hooks/useLogin'
import { styles, LOGO_SIZE } from '@features/auth/components/styles/LoginFormStyle'

const LoginForm = () => {
  const {
    formValues,
    errors,
    touched,
    isLoading,
    isPasswordVisible,
    updateField,
    markTouched,
    handleLogin,
    togglePasswordVisibility,
  } = useLogin()

  const [language, setLanguage] = useState('en-US')

  return (
    // ── Rule 3: flex column, space-between splits top and bottom zones ──
    <View style={styles.container}>

      <View style={styles.topZone}>

        {/* ── Language Selector ── */}
        <View style={styles.languageRow}>
          <Dropdown
            options={INDIAN_LANGUAGES}
            value={language}
            onChange={(opt: DropdownOption) => setLanguage(opt.value)}
            containerStyle={styles.languageDropdown}
            variant="ghost"
          />
        </View>

        {/* ── Logo + Brand ── */}
        <View style={styles.brandSection}>
          <View style={styles.logoCircle}>
            <View style={[styles.segment, styles.segTL]} />
            <View style={[styles.segment, styles.segTR]} />
            <View style={[styles.segment, styles.segBR]} />
            <View style={[styles.segment, styles.segBL]} />
            <View style={styles.playCenter}>
              <View style={styles.playTriangle} />
            </View>
          </View>
          <View style={styles.brandRow}>
            <Text style={styles.brandCampus}>Campus</Text>
            <Text style={styles.brandLive}> Live</Text>
          </View>
        </View>

        {/* ── General Error Banner ── */}
        {errors.general && (
          <View style={styles.generalError}>
            <Text style={styles.generalErrorText}>{errors.general}</Text>
          </View>
        )}

        {/* ── Identifier Input ── */}
        {/* error only shows if field has been touched */}
        <Input
          placeholder="Username, email or mobile number"
          value={formValues.identifier}
          onChangeText={(v) => updateField('identifier', v)}
          onBlur={() => markTouched('identifier')}
          error={touched.identifier ? errors.identifier : undefined}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />

        {/* ── Password Input ── */}
        <Input
          placeholder="Password"
          value={formValues.password}
          onChangeText={(v) => updateField('password', v)}
          onBlur={() => markTouched('password')}
          error={touched.password ? errors.password : undefined}
          secureTextEntry={!isPasswordVisible}
          rightIcon={
            <Text style={styles.eyeText}>
              {isPasswordVisible ? 'Hide' : 'Show'}
            </Text>
          }
          onRightIconPress={togglePasswordVisibility}
        />

        {/* ── Login Button ── */}
        <Button
          label="Log In"
          onPress={handleLogin}
          isLoading={isLoading}
        />

        {/* ── Forgot Password ── */}
        <TouchableOpacity
          style={styles.forgotContainer}
          onPress={() => router.push('/(auth)/forgot-password' as any)}
          activeOpacity={0.7}
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

      </View>

      {/* ── Divider ── */}
      <View style={styles.dividerRow}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* ── Create Account Button ── */}
      <View style={{ marginBottom: 30 }} />
      <Button
        label="Create new account"
        onPress={() => router.push('/(auth)/register' as any)}
        variant="outline"
      />
    </View>
  )
}

export default LoginForm