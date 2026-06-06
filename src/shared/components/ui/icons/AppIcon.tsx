import { FontAwesome, Ionicons } from '@expo/vector-icons'
import type { AppIconProps } from './types'

export function AppIcon({
  name,
  set = 'ionicons',
  size = 22,
  color = '#121212',
}: AppIconProps) {
  if (set === 'fontAwesome') {
    return <FontAwesome name={name as never} size={size} color={color} />
  }

  return <Ionicons name={name as never} size={size} color={color} />
}
