import { StyleSheet } from 'react-native'
import { colors, spacing, typography } from '@constants/index'

export const styles = StyleSheet.create({
  content: {
    gap: spacing.xl,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    ...typography.h2,
    color: colors.textPrimary,
    textAlign: 'center',
  },
})
