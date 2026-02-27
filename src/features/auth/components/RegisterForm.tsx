// src/features/auth/components/RegisterForm.tsx

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import RegisterStep1 from '@features/auth/components/RegisterStep1'
import RegisterStep2 from '@features/auth/components/RegisterStep2'
import RegisterStep3 from '@features/auth/components/RegisterStep3'
import useRegister from '@features/auth/hooks/useRegister'
import { styles } from '@features/auth/components/styles/RegisterFormStyle'

const RegisterForm = () => {
  const hook = useRegister()

  return (
    // flex: 1 + minHeight: '100%' ensures the form fills the ScrollView
    // so Continue button is never floating in the middle on tall screens
    <View style={styles.formContainer}>

      {hook.currentStep === 1 && <RegisterStep1 hook={hook} />}
      {hook.currentStep === 2 && <RegisterStep2 hook={hook} />}
      {hook.currentStep === 3 && <RegisterStep3 hook={hook} />}

      {/* ── Already have account — step 1 only ── */}
      {hook.currentStep === 1 && (
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.replace('/(auth)/login')}>
            <Text style={styles.loginLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  )
}

export default RegisterForm