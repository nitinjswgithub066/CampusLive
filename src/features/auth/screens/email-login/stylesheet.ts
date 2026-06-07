import { StyleSheet } from 'react-native'
import { colors, spacing, typography } from '@constants/index'

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: spacing['2xl'],
    justifyContent: 'center',
    width: '100%',
  },
  heading: {
    gap: spacing.sm,
    width: '100%',
  },
  title: {
    ...typography.h1,
    color: colors.textPrimary,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
  },
  form: {
    gap: spacing.lg,
    width: '100%',
  },
  eyeButton: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  forgotButton: {
    alignSelf: 'flex-start',
    paddingVertical: spacing.xs,
  },
  forgotText: {
    ...typography.small,
    color: colors.primary,
    fontWeight: '600',
  },
})
