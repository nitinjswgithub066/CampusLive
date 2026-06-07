import { Text, View } from 'react-native'
import { AppLogo } from '@shared/components/ui/AppLogo'
import { styles } from './stylesheet'

interface AuthHeaderProps {
  title: string
  subtitle: string
  showLogo?: boolean
}

export function AuthHeader({
  title,
  subtitle,
  showLogo = true,
}: AuthHeaderProps) {
  return (
    <View style={styles.wrapper}>
      {showLogo && <AppLogo size={88} />}
      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}
