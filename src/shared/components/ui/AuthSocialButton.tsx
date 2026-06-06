import { StyleSheet, View } from 'react-native'
import { AppButton } from './AppButton'
import { AppIcon } from './icons/AppIcon'
import colors from '@constants/colors'
import { spacing } from '@constants/spacing'

type SocialProvider = 'google' | 'facebook' | 'apple' | 'email'

interface AuthSocialButtonProps {
  provider: SocialProvider
  title: string
  onPress: () => void
}

const providerIcons: Record<SocialProvider, { name: string; set?: 'fontAwesome' | 'ionicons' }> = {
  google: { name: 'google', set: 'fontAwesome' },
  facebook: { name: 'facebook', set: 'fontAwesome' },
  apple: { name: 'logo-apple' },
  email: { name: 'mail-outline' },
}

export function AuthSocialButton({
  provider,
  title,
  onPress,
}: AuthSocialButtonProps) {
  const icon = providerIcons[provider]

  return (
    <AppButton
      title={title}
      variant="secondary"
      onPress={onPress}
      icon={
        <View style={styles.iconBox}>
          <AppIcon
            color={colors.light.textPrimary}
            name={icon.name}
            set={icon.set}
            size={20}
          />
        </View>
      }
    />
  )
}

const styles = StyleSheet.create({
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: spacing.xl,
  },
})

export default AuthSocialButton
