import { StyleSheet } from 'react-native'
import { colors, spacing, typography } from '@constants/index'

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: spacing.lg,
    width: '100%',
  },
  copy: {
    alignItems: 'center',
    gap: spacing.sm,
    width: '100%',
  },
  title: {
    ...typography.h1,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
})
