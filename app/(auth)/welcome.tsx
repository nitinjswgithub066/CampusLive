import { StyleSheet, Text, View } from 'react-native'
import { router } from 'expo-router'
import { AppButton } from '@shared/components/ui/AppButton'
import { ScreenContainer } from '@shared/components/ui/ScreenContainer'
import { WelcomeIllustration } from '@shared/components/ui/WelcomeIllustration'
import { AuthFooterLink } from '@features/auth/components/AuthFooterLink'
import { routes } from '@app-types/navigation'
import colors from '@constants/colors'
import { typography } from '@constants/fonts'
import { spacing } from '@constants/spacing'

export default function WelcomeRoute() {
  return (
    <ScreenContainer centered>
      <View style={styles.content}>
        <WelcomeIllustration />

        <View style={styles.copy}>
          <Text style={styles.title}>Your campus is live</Text>
          <Text style={styles.subtitle}>
            Sign in to watch streams, join conversations, and keep up with your community.
          </Text>
        </View>

        <View style={styles.actions}>
          <AppButton title="Login" onPress={() => router.push(routes.login)} />
          <AppButton
            title="Create Account"
            variant="secondary"
            onPress={() => router.push(routes.register)}
          />
        </View>

        <AuthFooterLink
          label="Already know where you are going?"
          actionLabel="Continue to login"
          onPress={() => router.push(routes.login)}
        />
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flex: 1,
    gap: spacing['2xl'],
    justifyContent: 'center',
    width: '100%',
  },
  copy: {
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
  actions: {
    gap: spacing.md,
    width: '100%',
  },
})
