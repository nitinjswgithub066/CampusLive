import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { Input } from '@shared/components/ui/Input'
import { Button } from '@shared/components/ui/Button'
import { Dropdown } from '@shared/components/ui/Dropdown'
import { INDIAN_LANGUAGES, ROLE_OPTIONS } from '@features/auth/utils/authHelpers'
import type { DropdownOption } from '@shared/components/ui/Dropdown'
import useLogin from '@features/auth/hooks/useLogin'
import { styles } from '@features/auth/components/styles/LoginFormStyle'

const LoginForm = () => {
  const {
    formValues,
    errors,
    isLoading,
    isPasswordVisible,
    updateField,
    setRole,
    handleLogin,
    togglePasswordVisibility,
  } = useLogin()

  const [language, setLanguage] = useState('en-US')

  return (
    <View>

      {/* ── Language Selector ───────────────────────────── */}
        <View style={styles.languageRow}>
            <Dropdown
                options={INDIAN_LANGUAGES}
                value={language}
                onChange={(opt: DropdownOption) => setLanguage(opt.value)}
                containerStyle={styles.languageDropdown}
                variant="ghost" 
            />
      </View>

      {/* ── Logo + Brand ────────────────────────────────── */}
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

      {/* ── General Error Banner ─────────────────────────── */}
      {errors.general && (
        <View style={styles.generalError}>
          <Text style={styles.generalErrorText}>{errors.general}</Text>
        </View>
      )}

      {/* ── Identifier Input ─────────────────────────────── */}
      <Input
        placeholder="Username, email or mobile number"
        value={formValues.identifier}
        onChangeText={(v) => updateField('identifier', v)}
        error={errors.identifier}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />

      {/* ── Password Input ───────────────────────────────── */}
      <Input
        placeholder="Password"
        value={formValues.password}
        onChangeText={(v) => updateField('password', v)}
        error={errors.password}
        secureTextEntry={!isPasswordVisible}
        rightIcon={
            <Text style={styles.eyeText}>
                {isPasswordVisible ? 'Hide' : 'Show'}
          </Text>
        }
        onRightIconPress={togglePasswordVisibility}
      />

      {/* ── Role Dropdown ────────────────────────────────── */}
      <Dropdown
        label="Sign in as"
        options={ROLE_OPTIONS}
        value={formValues.role}
        onChange={(opt: DropdownOption) => setRole(opt.value as 'viewer' | 'streamer')}
        variant='default'
        bottomPadding={32}
      />

      {/* ── Login Button ─────────────────────────────────── */}
      <Button
        label="Log In"
        onPress={handleLogin}
        isLoading={isLoading}
      />

      {/* ── Forgot Password ──────────────────────────────── */}
      <TouchableOpacity
        style={styles.forgotContainer}
        onPress={() => router.push('/(auth)/forgot-password' as any)}
        activeOpacity={0.7}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* ── Divider ──────────────────────────────────────── */}
      <View style={styles.dividerRow}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* ── Create Account Button ────────────────────────── */}
      <Button
        label="Create new account"
        onPress={() => router.push('/(auth)/register' as any)}
        variant="outline"
      />

    </View>
  )
}

export default LoginForm