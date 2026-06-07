import { View } from 'react-native'
import { AppButton } from '@shared/components/ui/AppButton'
import { AppIcon } from '@shared/components/ui/icons/AppIcon'
import { colors } from '@constants/index'
import { styles } from './stylesheet'

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
      variant="outline"
      onPress={onPress}
      icon={
        <View style={styles.iconBox}>
          <AppIcon
            color={colors.textPrimary}
            name={icon.name}
            set={icon.set}
            size={20}
          />
        </View>
      }
    />
  )
}
