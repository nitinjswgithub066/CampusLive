import { StyleSheet, Platform, StatusBar } from 'react-native'
import Colors from '@constants/colors'
import { Spacing } from '@constants/theme'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.backgroundInput,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Platform.OS === 'android'
      ? (StatusBar.currentHeight ?? 24) + Spacing.md
      : Spacing.xl,
    paddingBottom: Spacing.xxl,
  },
})