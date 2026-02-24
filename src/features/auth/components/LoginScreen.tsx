import React from 'react'
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native'
import LoginForm from '@features/auth/components/LoginForm'
import { styles } from '@features/auth/components/styles/LoginScreenStyle'

const LoginScreen = () => {
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
        <LoginForm />
      </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen
