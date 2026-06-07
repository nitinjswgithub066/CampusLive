import { StyleSheet } from 'react-native'
import { colors, spacing, typography } from '@constants/index'

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    justifyContent: 'center',
  },
  label: {
    ...typography.small,
    color: colors.textSecondary,
  },
  action: {
    ...typography.small,
    color: colors.primary,
    fontWeight: '600',
  },
})
