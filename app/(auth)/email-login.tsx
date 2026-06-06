import { useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import { router } from 'expo-router'
import { AppButton } from '@shared/components/ui/AppButton'
import { AppTextInput } from '@shared/components/ui/AppTextInput'
import { ScreenContainer } from '@shared/components/ui/ScreenContainer'
import { AppIcon } from '@shared/components/ui/icons/AppIcon'
import { routes } from '@app-types/navigation'
import colors from '@constants/colors'
import { typography } from '@constants/fonts'
import { spacing } from '@constants/spacing'

export default function EmailLoginRoute() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <ScreenContainer centered>
      <View style={styles.content}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <AppIcon name="arrow-back" color={colors.light.textPrimary} />
        </Pressable>

        <View style={styles.copy}>
          <Text style={styles.title}>Login with email</Text>
          <Text style={styles.subtitle}>
            Use your email or username and password to continue.
          </Text>
        </View>

        <View style={styles.form}>
          <AppTextInput
            label="Email / Username"
            placeholder="name@campus.edu"
            value={identifier}
            onChangeText={setIdentifier}
          />
          <AppTextInput
            label="Password"
            placeholder="Enter password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
            rightElement={
              <Pressable
                onPress={() => setIsPasswordVisible((value) => !value)}
                style={styles.eyeButton}
              >
                <AppIcon
                  name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                  color={colors.light.textSecondary}
                  size={20}
                />
              </Pressable>
            }
          />
          <Pressable
            style={styles.forgotButton}
            onPress={() => {
              Alert.alert('Coming soon', 'Forgot password will be created in Step 2.')
            }}
          >
            <Text style={styles.forgotText}>Forgot Password</Text>
          </Pressable>
        </View>

        <AppButton title="Login" onPress={() => router.replace(routes.home)} />
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
  backButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  copy: {
    gap: spacing.sm,
    width: '100%',
  },
  title: {
    ...typography.h1,
    color: colors.light.textPrimary,
  },
  subtitle: {
    ...typography.body,
    color: colors.light.textSecondary,
  },
  form: {
    gap: spacing.lg,
    width: '100%',
  },
  eyeButton: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  forgotButton: {
    alignSelf: 'flex-start',
    paddingVertical: spacing.xs,
  },
  forgotText: {
    ...typography.small,
    color: colors.light.primary,
    fontWeight: '600',
  },
})
