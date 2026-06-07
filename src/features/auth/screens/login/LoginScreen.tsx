import { Animated, Text, View } from 'react-native'
import { router } from 'expo-router'
import { AuthFooterLink } from '@features/auth/components/AuthFooterLink'
import { AuthSocialButton } from '@features/auth/components/AuthSocialButton'
import { IconButton } from '@shared/components/ui/IconButton'
import { ScreenContainer } from '@shared/components/layout/ScreenContainer'
import { routes } from '@app-types/navigation'
import { useFadeInUp } from '@shared/hooks/useFadeInUp'
import { styles } from './stylesheet'

export default function LoginScreen() {
  const animatedStyle = useFadeInUp()
  const goHome = () => router.replace(routes.home)

  return (
    <ScreenContainer centered>
      <Animated.View style={[styles.content, animatedStyle]}>
        <IconButton name="arrow-back" onPress={() => router.back()} />

        <View style={styles.heading}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Choose a method to continue</Text>
        </View>

        <View style={styles.panel}>
          <AuthSocialButton
            provider="google"
            title="Continue with Google"
            onPress={goHome}
          />
          <AuthSocialButton
            provider="facebook"
            title="Continue with Facebook"
            onPress={goHome}
          />
          <AuthSocialButton
            provider="apple"
            title="Continue with Apple"
            onPress={goHome}
          />
          <AuthSocialButton
            provider="email"
            title="Continue with Email"
            onPress={() => router.push(routes.emailLogin)}
          />
        </View>

        <AuthFooterLink
          label="Don't have an account?"
          actionLabel="Sign up"
          onPress={() => router.push(routes.register)}
        />
      </Animated.View>
    </ScreenContainer>
  )
}
