// src/features/auth/components/ForgotPasswordScreen.tsx

import React from 'react'
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native'
import ForgotPasswordForm from '@features/auth/components/ForgotPasswordForm'
import { styles } from '@features/auth/components/styles/ForgotPasswordScreenStyle'

const ForgotPasswordScreen = () => {
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
        <ForgotPasswordForm />
      </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default ForgotPasswordScreen