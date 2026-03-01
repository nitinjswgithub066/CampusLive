// src/features/auth/components/RegisterForm.tsx

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import useRegister from '@features/auth/hooks/useRegister'
import { styles } from '@features/auth/components/styles/RegisterFormStyle'
import RegisterUserInfo from '@features/auth/components/RegisterUserInfo'
import RegisterContact from '@features/auth/components/RegisterContact'
import RegisterUserProfile from '@features/auth/components/RegisterUserProfile'

const RegisterForm = () => {
  const hook = useRegister()

  return (
    <View style={styles.formContainer}>

      {hook.currentStep === 1 && <RegisterUserInfo hook={hook} />}
      {hook.currentStep === 2 && <RegisterContact hook={hook} />}
      {hook.currentStep === 3 && <RegisterUserProfile hook={hook} />}

      {/* ── Already have account — step 1 only ── */}
      {hook.currentStep === 1 && (
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/login' as any)}>
            <Text style={styles.loginLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  )
}

export default RegisterForm