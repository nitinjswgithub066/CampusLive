import { FontSize, Radius, Spacing } from '@constants/theme'
import Colors from '@constants/colors'
import { StyleSheet, Dimensions } from 'react-native'

Dimensions.get('window')

// Each option row height
export const OPTION_HEIGHT = 55
// Handle + title area at top of sheet
export const SHEET_HEADER_HEIGHT = 60

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: Spacing.md,
  },
  label: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.textWhite,
    borderRadius: Radius.lg,
    borderWidth: 1.5,
    borderColor: Colors.border,
    height: 52,
    paddingHorizontal: Spacing.md,
  },
    triggerTransparent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
    height: 40,
    paddingHorizontal: 0,
  },
  triggerTextGhost: {
  fontSize: FontSize.md,
  color: Colors.textPrimary,
  textAlign: 'center', 
  },
  triggerText: {
    fontSize: FontSize.md,
    color: Colors.textPrimary,
    flex: 1,
  },
    triggerError: {
    borderColor: Colors.error,
    borderWidth: 1.5,
  },
  errorText: {
    fontSize: 11,
    color: Colors.error,
    marginTop: 4,
    marginLeft: 4,
  },
  placeholder: {
    color: Colors.textMuted,
  },
  chevron: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: Spacing.sm,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: Colors.textWhite,
    borderTopLeftRadius: Radius.xl,
    borderTopRightRadius: Radius.xl,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xxl,
  },
  sheetHandle: {
    width: 40,
    height: 10,
    backgroundColor: Colors.border,
    borderRadius: Radius.full,
    alignSelf: 'center',
    marginBottom: Spacing.md,
  },
  sheetTitle: {
    fontSize: FontSize.lg,
    color: Colors.textPrimary,
    fontWeight: '600',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  optionsList: {
    // height is set dynamically in the component
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: OPTION_HEIGHT,
    paddingHorizontal: Spacing.lg,
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
    fontSize: FontSize.md,
    fontWeight: '700',
    marginLeft: Spacing.sm,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: Spacing.lg,
    opacity: 0.4,
  },
})