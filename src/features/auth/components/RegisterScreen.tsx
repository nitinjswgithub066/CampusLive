// src/features/auth/components/RegisterScreen.tsx

import React from 'react'
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native'
import RegisterForm from '@features/auth/components/RegisterForm'
import { styles } from '@features/auth/components/styles/RegisterScreenStyle'

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <RegisterForm />
      </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default RegisterScreen