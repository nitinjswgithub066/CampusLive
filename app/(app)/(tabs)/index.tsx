import { StyleSheet, Text, View } from 'react-native'
import { ScreenContainer } from '@shared/components/ui/ScreenContainer'
import colors from '@constants/colors'
import { typography } from '@constants/fonts'
import { spacing } from '@constants/spacing'

export default function HomePlaceholderRoute() {
  return (
    <ScreenContainer centered>
      <View style={styles.content}>
        <Text style={styles.title}>Home Feed will be created after authentication flow.</Text>
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    ...typography.h2,
    color: colors.light.textPrimary,
    textAlign: 'center',
  },
})
