// src/features/auth/components/styles/LoginScreenStyle.ts

import { StyleSheet } from 'react-native'
import Colors from '@constants/colors'
import { Spacing } from '@constants/theme'

export const styles = StyleSheet.create({

  // SafeAreaView wraps everything — handles top and bottom system bars
  safeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundCard,
  },

  // KeyboardAvoidingView
  root: {
    flex: 1,
  },

  // ScrollView contentContainerStyle
  // No manual paddingTop — SafeAreaView handles the top inset
  scroll: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,       // small breathing room, not status bar math
    paddingBottom: Spacing.md,
  },
})