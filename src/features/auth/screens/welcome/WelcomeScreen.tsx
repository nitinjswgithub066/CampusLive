import { Animated, Text, View } from 'react-native'
import { router } from 'expo-router'
import { AppButton } from '@shared/components/ui/AppButton'
import { AppLogo } from '@shared/components/ui/AppLogo'
import { ScreenContainer } from '@shared/components/layout/ScreenContainer'
import { routes } from '@app-types/navigation'
import { useFadeInUp } from '@shared/hooks/useFadeInUp'
import { styles } from './stylesheet'

export default function WelcomeScreen() {
  const animatedStyle = useFadeInUp()

  return (
    <ScreenContainer centered>
      <Animated.View style={[styles.content, animatedStyle]}>
        <View style={styles.heroCard}>
          <AppLogo size={92} />

          <View style={styles.illustration}>
            <View style={styles.liveCard}>
              <View style={styles.liveHeader}>
                <View style={styles.liveDot} />
                <Text style={styles.liveLabel}>LIVE MOMENT</Text>
              </View>
              <View style={styles.playCircle}>
                <View style={styles.playTriangle} />
              </View>
            </View>
          </View>

          <View style={styles.copy}>
            <Text style={styles.title}>Watch live moments as they happen.</Text>
            <Text style={styles.subtitle}>
              Discover creators, connect with communities, and stream live from anywhere.
            </Text>
          </View>
        </View>

        <View style={styles.actions}>
          <AppButton title="Login" onPress={() => router.push(routes.login)} />
          <AppButton
            title="Create Account"
            variant="outline"
            onPress={() => router.push(routes.register)}
          />
        </View>
      </Animated.View>
    </ScreenContainer>
  )
}
