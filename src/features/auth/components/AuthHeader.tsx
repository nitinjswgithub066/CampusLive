import { StyleSheet, Text, View } from 'react-native'
import { AppLogo } from '@shared/components/ui/AppLogo'
import colors from '@constants/colors'
import { typography } from '@constants/fonts'
import { spacing } from '@constants/spacing'

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

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: spacing.lg,
    width: '100%',
  },
  copy: {
    alignItems: 'center',
    gap: spacing.sm,
    width: '100%',
  },
  title: {
    ...typography.h1,
    color: colors.light.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: colors.light.textSecondary,
    textAlign: 'center',
  },
})

export default AuthHeader
