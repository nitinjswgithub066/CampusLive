import type { ReactNode } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '@constants/colors'
import { typography } from '@constants/fonts'
import { radius } from '@constants/radius'
import { spacing } from '@constants/spacing'

type AppButtonVariant = 'primary' | 'secondary' | 'ghost'

interface AppButtonProps {
  title: string
  onPress: () => void
  variant?: AppButtonVariant
  icon?: ReactNode
}

export function AppButton({
  title,
  onPress,
  variant = 'primary',
  icon,
}: AppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.content}>
        {icon}
        <Text style={[styles.label, styles[`${variant}Label`]]}>{title}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
    backgroundColor: colors.light.primary,
  },
  secondary: {
    backgroundColor: colors.light.surface,
    borderColor: colors.light.border,
    borderWidth: 1,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  label: {
    ...typography.body,
  },
  primaryLabel: {
    color: colors.light.background,
  },
  secondaryLabel: {
    color: colors.light.textPrimary,
  },
  ghostLabel: {
    color: colors.light.primary,
  },
})

export default AppButton
