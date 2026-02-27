// src/features/auth/components/styles/RegisterScreenStyle.ts

import { StyleSheet } from 'react-native'
import Colors from '@constants/colors'
import { Spacing } from '@constants/theme'

export const styles = StyleSheet.create({

  // SafeAreaView — handles top and bottom system bars automatically
  safeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundCard,
  },

  // KeyboardAvoidingView
  root: {
    flex: 1,
  },

  // ScrollView contentContainerStyle
  // No manual paddingTop — SafeAreaView handles the status bar inset
  scroll: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: 0,
  },
})