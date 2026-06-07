import { StyleSheet } from 'react-native'
import { colors, radius, spacing, typography } from '@constants/index'

export const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: radius.md,
    justifyContent: 'center',
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    width: '100%',
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
  },
  primary: {
    // TODO: Replace solid color with #FF6B35 -> #6D5DF6 gradient if a gradient wrapper is added.
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.elevated,
  },
  outline: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  label: {
    ...typography.body,
  },
  primaryLabel: {
    color: colors.surface,
  },
  secondaryLabel: {
    color: colors.textPrimary,
  },
  outlineLabel: {
    color: colors.textPrimary,
  },
})
