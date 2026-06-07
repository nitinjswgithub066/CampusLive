import { Pressable, Text, View } from 'react-native'
import { styles } from './stylesheet'

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
