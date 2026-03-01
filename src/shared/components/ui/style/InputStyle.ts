import { StyleSheet } from 'react-native'
import Colors from '@constants/colors'
import { FontSize, Spacing, Radius } from '@constants/theme'

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: Spacing.md,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundCard,
    borderRadius: Radius.lg,
    borderWidth: 1.5,
    borderColor: Colors.border,
    height: 52,
    paddingHorizontal: Spacing.md,
  },
  inputError: {
    borderColor: Colors.error,
  },
  input: {
    flex: 1,
    fontSize: FontSize.md,
    color: Colors.textPrimary,
    height: '100%',
  },
  iconWrapper: {
    marginLeft: Spacing.sm,
    paddingHorizontal: Spacing.xs,
    paddingVertical: Spacing.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // ─── Simple Show/Hide text for password ──────────────
  eyeText: {
    fontSize: FontSize.xs,
    fontWeight: '600',
    color: Colors.teal,
    letterSpacing: 0.3,
  },
  errorText: {
    fontSize: FontSize.xs,
    color: Colors.error,
    marginTop: Spacing.xs,
    marginLeft: Spacing.xs,
  },
    prefixText: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    fontWeight: '600',
    paddingRight: Spacing.xs,
    borderRightWidth: 1,
    borderRightColor: Colors.border,
    marginRight: Spacing.xs,
  },
  leftIconWrapper: {
  marginRight: Spacing.xs,
  justifyContent: 'center',
  alignItems: 'center',
},
inputWithLeftIcon: {
  flex: 1,
},
})