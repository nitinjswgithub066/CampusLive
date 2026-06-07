import { Pressable } from 'react-native'
import { AppIcon } from '../icons/AppIcon'
import { colors } from '@constants/index'
import { styles } from './stylesheet'

interface IconButtonProps {
  name: string
  onPress: () => void
  color?: string
}

export function IconButton({
  name,
  onPress,
  color = colors.textPrimary,
}: IconButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <AppIcon name={name} color={color} />
    </Pressable>
  )
}
