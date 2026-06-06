import { StyleSheet, Text, View } from 'react-native'
import { router } from 'expo-router'
import { AuthHeader } from '@features/auth/components/AuthHeader'
import { AuthSocialButton } from '@shared/components/ui/AuthSocialButton'
import { ScreenContainer } from '@shared/components/ui/ScreenContainer'
import { routes } from '@app-types/navigation'
import colors from '@constants/colors'
import { typography } from '@constants/fonts'
import { spacing } from '@constants/spacing'

export default function LoginRoute() {
  const goHome = () => router.replace(routes.home)

  return (
    <ScreenContainer centered>
      <View style={styles.content}>
        <AuthHeader
          title="Welcome back"
          subtitle="Choose how you want to continue into CampusLive."
        />

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Login method</Text>
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
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: spacing['2xl'],
    justifyContent: 'center',
    width: '100%',
  },
  panel: {
    gap: spacing.md,
    width: '100%',
  },
  panelTitle: {
    ...typography.h3,
    color: colors.light.textPrimary,
    paddingBottom: spacing.xs,
  },
})
