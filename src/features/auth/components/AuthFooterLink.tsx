import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '@constants/colors'
import { typography } from '@constants/fonts'
import { spacing } from '@constants/spacing'

interface AuthFooterLinkProps {
  label: string
  actionLabel: string
  onPress: () => void
}

export function AuthFooterLink({
  label,
  actionLabel,
  onPress,
}: AuthFooterLinkProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.action}>{actionLabel}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    justifyContent: 'center',
  },
  label: {
    ...typography.small,
    color: colors.light.textSecondary,
  },
  action: {
    ...typography.small,
    color: colors.light.primary,
    fontWeight: '600',
  },
})

export default AuthFooterLink
