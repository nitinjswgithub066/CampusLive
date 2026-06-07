import { StyleSheet, Text, View } from 'react-native'
import { ScreenContainer } from '@shared/components/layout/ScreenContainer'
import { colors, spacing, typography } from '@constants/index'

export default function HomePlaceholderRoute() {
  return (
    <ScreenContainer centered>
      <View style={styles.content}>
        <Text style={styles.title}>Home Feed will be created later.</Text>
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
    color: colors.textPrimary,
    textAlign: 'center',
  },
})
