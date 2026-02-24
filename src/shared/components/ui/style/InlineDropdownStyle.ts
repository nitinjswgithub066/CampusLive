import { StyleSheet } from 'react-native'
import Colors from '@constants/colors'
import { FontSize, Spacing, Radius } from '@constants/theme'

export const OPTION_HEIGHT = 48

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.backgroundInput,
    borderRadius: Radius.lg,
    borderWidth: 1.5,
    borderColor: Colors.border,
    height: 52,
    paddingHorizontal: Spacing.md,
  },
  triggerOpen: {
    borderColor: Colors.teal,
  },
  triggerError: {
    borderColor: Colors.error,
  },
  triggerText: {
    fontSize: FontSize.md,
    color: Colors.textPrimary,
    flex: 1,
  },
  placeholder: {
    color: Colors.textMuted,
  },
  chevron: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  chevronOpen: {
    color: Colors.teal,
  },
  errorText: {
    fontSize: FontSize.xs,
    color: Colors.error,
    marginTop: Spacing.xs,
    marginLeft: Spacing.xs,
  },

  // ── The list that floats below ──
  backdrop: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  dropdownList: {
    backgroundColor: Colors.textWhite,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: OPTION_HEIGHT,
    paddingHorizontal: Spacing.md,
  },
  optionSelected: {
    backgroundColor: `${Colors.teal}12`,
  },
  optionText: {
    fontSize: FontSize.md,
    color: Colors.textPrimary,
    flex: 1,
  },
  optionTextSelected: {
    color: Colors.teal,
    fontWeight: '600',
  },
  checkmark: {
    color: Colors.teal,
    fontSize: FontSize.sm,
    fontWeight: '700',
  },
  separator: {
    height: 1,
    backgroundColor: Colors.border,
    opacity: 0.4,
    marginHorizontal: Spacing.md,
  },
})

export { styles }