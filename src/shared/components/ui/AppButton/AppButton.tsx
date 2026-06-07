import type { ReactNode } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './stylesheet'

export type AppButtonVariant = 'primary' | 'secondary' | 'outline'

interface AppButtonProps {
  title: string
  onPress: () => void
  variant?: AppButtonVariant
  disabled?: boolean
  icon?: ReactNode
}

export function AppButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  icon,
}: AppButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ]}
    >
      <View style={styles.content}>
        {icon}
        <Text style={[styles.label, styles[`${variant}Label`]]}>{title}</Text>
      </View>
    </Pressable>
  )
}
