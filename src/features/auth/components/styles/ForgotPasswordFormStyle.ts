import { StyleSheet } from 'react-native'
import Colors from '@constants/colors'
import { FontSize, Spacing, Radius } from '@constants/theme'

export const styles = StyleSheet.create({

  // ─── Line 1: Back arrow ───────────────────────────────
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  backButton: {
    paddingVertical: Spacing.xs,
    paddingRight: Spacing.md,
  },
  backText: {
    fontSize: 28,
    color: Colors.textPrimary,
    fontWeight: '600',
    lineHeight: 32,
  },

  // ─── Line 2: Heading ──────────────────────────────────
  titleRow: {
    marginBottom: Spacing.xs,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },

  // ─── Line 3: Subtitle ─────────────────────────────────
  subtitleRow: {
    marginBottom: Spacing.xl,
  },
  subtitle: {
    fontSize: FontSize.sm,
    color: Colors.textMuted,
    lineHeight: 20,
  },

  // ─── OTP Input box ────────────────────────────────────
  otpWrapper: {
    width: '100%',
    marginBottom: Spacing.md,
  },
  otpBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundInput,
    borderRadius: Radius.lg,
    borderWidth: 1.5,
    borderColor: Colors.border,
    height: 56,
    paddingHorizontal: Spacing.md,
  },
  otpBoxFocused: {
    borderColor: Colors.teal,
  },
  otpInput: {
    flex: 1,
    fontSize: FontSize.xl,
    color: Colors.textPrimary,
    letterSpacing: 6,
    fontWeight: '700',
    height: '100%',
  },

  // ─── Countdown timer inside OTP box ───────────────────
  timerText: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.teal,
    minWidth: 40,
    textAlign: 'right',
  },
  timerExpired: {
    color: Colors.textMuted,
  },

  // ─── Resend row ───────────────────────────────────────
  resendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xl,
    gap: 4,
  },
  resendLabel: {
    fontSize: FontSize.sm,
    color: Colors.textMuted,
  },
  resendActive: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.teal,
  },
  resendInactive: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.textMuted,
  },

  // ─── Try another way link ─────────────────────────────
  tryAnotherRow: {
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  tryAnotherText: {
    fontSize: FontSize.sm,
    color: Colors.teal,
    fontWeight: '500',
  },

  // ─── Maybe Later link ─────────────────────────────────
  maybeLaterRow: {
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  maybeLaterText: {
    fontSize: FontSize.sm,
    color: Colors.textMuted,
    fontWeight: '500',
  },

  // ─── Password conditions checker ──────────────────────
  conditionsContainer: {
    backgroundColor: `${Colors.teal}08`,
    borderRadius: Radius.md,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: `${Colors.teal}20`,
    gap: Spacing.xs,
  },
  conditionsTitle: {
    fontSize: FontSize.xs,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  conditionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  conditionIcon: {
    fontSize: 12,
    width: 16,
  },
  conditionText: {
    fontSize: FontSize.xs,
  },
  conditionMet: {
    color: Colors.teal,
  },
  conditionUnmet: {
    color: Colors.textMuted,
  },

  // ─── General error ────────────────────────────────────
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

  // ─── Action button ────────────────────────────────────
  actionBtn: {
    marginTop: Spacing.sm,
  },
})