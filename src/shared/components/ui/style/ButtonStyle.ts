import { FontSize, Radius, Spacing } from '@constants/theme'
import Colors from '@constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: 54,
    borderRadius: Radius.lg,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  gradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outline: {
    borderWidth: 1.5,
    borderColor: Colors.teal,
    backgroundColor: 'transparent',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  primaryLabel: {
    color: Colors.textInverse,
    fontSize: FontSize.md,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  outlineLabel: {
    color: Colors.teal,
    fontSize: FontSize.md,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  ghostLabel: {
    color: Colors.teal,
    fontSize: FontSize.md,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  },
})

export { styles }