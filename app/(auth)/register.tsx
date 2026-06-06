import { StyleSheet, Text, View } from 'react-native'
import { router } from 'expo-router'
import { AppButton } from '@shared/components/ui/AppButton'
import { ScreenContainer } from '@shared/components/ui/ScreenContainer'
import colors from '@constants/colors'
import { typography } from '@constants/fonts'
import { spacing } from '@constants/spacing'

export default function RegisterPlaceholderRoute() {
  return (
    <ScreenContainer centered>
      <View style={styles.content}>
        <Text style={styles.title}>Registration flow will be created in Step 2.</Text>
        <AppButton title="Back to Welcome" onPress={() => router.back()} />
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.xl,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    ...typography.h2,
    color: colors.light.textPrimary,
    textAlign: 'center',
  },
})
