import { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { router } from 'expo-router'
import { AuthHeader } from '@features/auth/components/AuthHeader'
import { AppButton } from '@shared/components/ui/AppButton'
import { ScreenContainer } from '@shared/components/ui/ScreenContainer'
import { routes } from '@app-types/navigation'
import colors from '@constants/colors'
import { typography } from '@constants/fonts'
import { spacing } from '@constants/spacing'
import { radius } from '@constants/radius'

const points = [
  'Discover live campus moments as they happen.',
  'Follow creators and join real conversations.',
  'Go live when your community needs to see it.',
]

export default function OnboardingRoute() {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const translateAnim = useRef(new Animated.Value(14)).current

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        duration: 450,
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        duration: 450,
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start()
  }, [fadeAnim, translateAnim])

  return (
    <ScreenContainer centered>
      <Animated.View
        style={[
          styles.content,
          { opacity: fadeAnim, transform: [{ translateY: translateAnim }] },
        ]}
      >
        <AuthHeader
          title="CampusLive"
          subtitle="Go live. Watch creators. Connect with your community."
        />

        <View style={styles.points}>
          {points.map((point) => (
            <View key={point} style={styles.pointRow}>
              <View style={styles.pointDot} />
              <Text style={styles.pointText}>{point}</Text>
            </View>
          ))}
        </View>

        <AppButton
          title="Continue"
          onPress={() => router.push(routes.welcome)}
        />
      </Animated.View>
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
  points: {
    backgroundColor: colors.light.surface,
    borderColor: colors.light.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    gap: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    width: '100%',
  },
  pointRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
  },
  pointDot: {
    backgroundColor: colors.light.primary,
    borderRadius: radius.round,
    height: 8,
    width: 8,
  },
  pointText: {
    ...typography.small,
    color: colors.light.textSecondary,
    flex: 1,
  },
})
