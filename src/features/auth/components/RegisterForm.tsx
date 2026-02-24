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
  // ── Single hook instance — passed down to each step ──
  // This is the singleton pattern — one source of truth for all 3 steps
  const hook = useRegister()

  return (
    <View>

      {/* ── Render step based on currentStep ── */}
      {hook.currentStep === 1 && <RegisterStep1 hook={hook} />}
      {hook.currentStep === 2 && <RegisterStep2 hook={hook} />}
      {hook.currentStep === 3 && <RegisterStep3 hook={hook} />}

      {/* ── Already have account — shown on step 1 only ── */}
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