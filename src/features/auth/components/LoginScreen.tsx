// src/features/auth/components/LoginScreen.tsx

import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginForm from '@features/auth/components/LoginForm'
import { styles } from '@features/auth/components/styles/LoginScreenStyle'

const LoginScreen = () => {
  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />

      <KeyboardAvoidingView
        style={styles.root}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <LoginForm />
        </ScrollView>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default LoginScreen