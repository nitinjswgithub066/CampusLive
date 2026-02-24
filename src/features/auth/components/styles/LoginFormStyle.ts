import { StyleSheet, Dimensions } from 'react-native'
import Colors from '@constants/colors'
import { FontSize, Spacing, Radius } from '@constants/theme'

const { width } = Dimensions.get('window')
export const LOGO_SIZE = width * 0.22

export const styles = StyleSheet.create({

  // ─── Language Selector ────────────────────────────────
  languageDropdown: {
    width: undefined,
    paddingBottom: 0,
  },
    languageRow: {
    width: '100%',
    alignItems: 'center',
    marginTop: Spacing.md,
    marginBottom: Spacing.xxl,
  },

  // ─── Brand Section ────────────────────────────────────
  brandSection: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  logoCircle: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: Colors.textWhite,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: Spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },

  // ─── Aperture Segments ────────────────────────────────
  segment: {
    position: 'absolute',
    width: '50%',
    height: '50%',
  },
  segTL: {
    top: 0,
    left: 0,
    backgroundColor: Colors.teal,
    borderBottomRightRadius: LOGO_SIZE * 0.15,
  },
  segTR: {
    top: 0,
    right: 0,
    backgroundColor: Colors.limeGreen,
    borderBottomLeftRadius: LOGO_SIZE * 0.15,
  },
  segBR: {
    bottom: 0,
    right: 0,
    backgroundColor: Colors.teal,
    opacity: 0.85,
    borderTopLeftRadius: LOGO_SIZE * 0.15,
  },
  segBL: {
    bottom: 0,
    left: 0,
    backgroundColor: Colors.limeGreenDark,
    opacity: 0.9,
    borderTopRightRadius: LOGO_SIZE * 0.15,
  },

  // ─── Play Button ──────────────────────────────────────
  playCenter: {
    width: LOGO_SIZE * 0.36,
    height: LOGO_SIZE * 0.36,
    borderRadius: (LOGO_SIZE * 0.36) / 2,
    backgroundColor: Colors.textWhite,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  playTriangle: {
    width: 0,
    height: 0,
    borderTopWidth: LOGO_SIZE * 0.09,
    borderBottomWidth: LOGO_SIZE * 0.09,
    borderLeftWidth: LOGO_SIZE * 0.16,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: Colors.teal,
    marginLeft: LOGO_SIZE * 0.03,
  },

  // ─── Brand Name ───────────────────────────────────────
  brandRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  brandCampus: {
    fontSize: FontSize.xl,
    fontWeight: '900',
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  brandLive: {
    fontSize: FontSize.xl,
    fontWeight: '900',
    color: Colors.teal,
    letterSpacing: -0.5,
  },

  // ─── General Error Banner ─────────────────────────────
  generalError: {
    backgroundColor: `${Colors.error}15`,
    borderRadius: Radius.md,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: `${Colors.error}30`,
  },
  generalErrorText: {
    color: Colors.error,
    fontSize: FontSize.sm,
    textAlign: 'center',
  },

  // ─── Forgot Password ──────────────────────────────────
  forgotContainer: {
    alignItems: 'center',
    marginTop: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  forgotText: {
    color: Colors.textMuted,
    fontSize: FontSize.sm,
    fontWeight: '600',
  },

  // ─── Divider ──────────────────────────────────────────
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.xl,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },
  dividerText: {
    marginHorizontal: Spacing.md,
    color: Colors.textMuted,
    fontSize: FontSize.sm,
  },

  eyeText: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.teal,
  },
})