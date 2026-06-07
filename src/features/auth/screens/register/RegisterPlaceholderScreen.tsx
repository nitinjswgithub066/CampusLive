import { Text, View } from 'react-native'
import { router } from 'expo-router'
import { AppButton } from '@shared/components/ui/AppButton'
import { ScreenContainer } from '@shared/components/layout/ScreenContainer'
import { routes } from '@app-types/navigation'
import { styles } from './stylesheet'

export default function RegisterPlaceholderScreen() {
  return (
    <ScreenContainer centered>
      <View style={styles.content}>
        <Text style={styles.title}>Registration flow will be created in the next step.</Text>
        <AppButton title="Back to Welcome" onPress={() => router.replace(routes.welcome)} />
      </View>
    </ScreenContainer>
  )
}
