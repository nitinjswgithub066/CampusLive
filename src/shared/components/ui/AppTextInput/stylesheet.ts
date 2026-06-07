import { StyleSheet } from 'react-native'
import { colors, radius, spacing, typography } from '@constants/index'

export const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.sm,
    width: '100%',
  },
  label: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  inputRow: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.sm,
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  inputRowError: {
    borderColor: colors.error,
  },
  input: {
    ...typography.body,
    color: colors.textPrimary,
    flex: 1,
    paddingVertical: 0,
  },
  error: {
    ...typography.caption,
    color: colors.error,
  },
})
