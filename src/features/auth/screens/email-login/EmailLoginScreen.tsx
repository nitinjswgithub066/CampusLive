import { Alert, Animated, Pressable, Text, View } from 'react-native'
import { router } from 'expo-router'
import { AuthFooterLink } from '@features/auth/components/AuthFooterLink'
import { AppButton } from '@shared/components/ui/AppButton'
import { AppIcon } from '@shared/components/ui/icons/AppIcon'
import { AppTextInput } from '@shared/components/ui/AppTextInput'
import { IconButton } from '@shared/components/ui/IconButton'
import { ScreenContainer } from '@shared/components/layout/ScreenContainer'
import { routes } from '@app-types/navigation'
import { colors } from '@constants/index'
import { useLoginForm } from '@features/auth/hooks/useLoginForm'
import { usePasswordVisibility } from '@features/auth/hooks/usePasswordVisibility'
import { useFadeInUp } from '@shared/hooks/useFadeInUp'
import { styles } from './stylesheet'

export default function EmailLoginScreen() {
  const animatedStyle = useFadeInUp()
  const {
    identifier,
    password,
    errors,
    setIdentifier,
    setPassword,
    validate,
  } = useLoginForm()
  const {
    isPasswordVisible,
    togglePasswordVisibility,
  } = usePasswordVisibility()

  const handleLogin = () => {
    if (validate()) {
      router.replace(routes.home)
    }
  }

  return (
    <ScreenContainer centered>
      <Animated.View style={[styles.content, animatedStyle]}>
        <IconButton name="arrow-back" onPress={() => router.back()} />

        <View style={styles.heading}>
          <Text style={styles.title}>Log In</Text>
          <Text style={styles.subtitle}>Welcome back! Please log in to continue.</Text>
        </View>

        <View style={styles.form}>
          <AppTextInput
            label="Email or Username"
            placeholder="name@campus.edu"
            value={identifier}
            onChangeText={setIdentifier}
            error={errors.identifier}
          />
          <AppTextInput
            label="Password"
            placeholder="Enter password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
            error={errors.password}
            rightIcon={
              <Pressable
                onPress={togglePasswordVisibility}
                style={styles.eyeButton}
              >
                <AppIcon
                  name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                  color={colors.textMuted}
                  size={20}
                />
              </Pressable>
            }
          />
          <Pressable
            style={styles.forgotButton}
            onPress={() => {
              Alert.alert('Coming soon', 'Forgot password will be created in the next step.')
            }}
          >
            <Text style={styles.forgotText}>Forgot Password</Text>
          </Pressable>
        </View>

        <AppButton title="Login" onPress={handleLogin} />

        <AuthFooterLink
          label="Don't have an account?"
          actionLabel="Sign up"
          onPress={() => router.push(routes.register)}
        />
      </Animated.View>
    </ScreenContainer>
  )
}
