import { StyleSheet } from 'react-native'
import { colors, spacing } from '@constants/index'

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboard: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl,
  },
  centered: {
    justifyContent: 'center',
  },
  inner: {
    flex: 1,
    gap: spacing.xl,
    width: '100%',
  },
})
