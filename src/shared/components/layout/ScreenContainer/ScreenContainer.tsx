import type { ReactNode } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './stylesheet'

interface ScreenContainerProps {
  children: ReactNode
  centered?: boolean
  scroll?: boolean
}

export function ScreenContainer({
  children,
  centered = false,
  scroll = true,
}: ScreenContainerProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboard}
      >
        <ScrollView
          contentContainerStyle={[
            styles.content,
            centered && styles.centered,
          ]}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={scroll}
        >
          <View style={styles.inner}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
