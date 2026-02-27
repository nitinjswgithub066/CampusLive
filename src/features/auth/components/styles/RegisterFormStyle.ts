// src/features/auth/components/styles/RegisterFormStyle.ts

import { StyleSheet, Dimensions } from 'react-native'
import Colors from '@constants/colors'
import { FontSize, Spacing, Radius } from '@constants/theme'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({

  // ─── Rule 3: fills the ScrollView ─────────────────────
  formContainer: {
    flex: 1,
  },

  // ─── Line 1: Back arrow ───────────────────────────────
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
    marginTop: Spacing.sm,
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

  // ─── Line 2: Heading + subtitle ───────────────────────
  titleRow: {
    marginBottom: Spacing.sm,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },
  pageSubtitle: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    maxWidth: width * 0.8,
    marginTop: Spacing.xs,
    lineHeight: 20,
  },

  // ─── Line 3: Progress bar ─────────────────────────────
  progressRow: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
    marginTop: Spacing.sm,
  },
  progressBar: {
    width: '80%',
  },

  // ─── DOB row ──────────────────────────────────────────
  dobLabel: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
    marginTop: Spacing.xs,
  },
  dobRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },

  // ─── Section label ────────────────────────────────────
  sectionLabel: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
    marginTop: Spacing.xs,
  },

  // ─── Streaming ID ─────────────────────────────────────
  streamingIdWrapper: {
    width: '100%',
    marginBottom: Spacing.md,
  },
  streamingIdBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: `${Colors.teal}10`,
    borderRadius: Radius.lg,
    borderWidth: 1.5,
    borderColor: `${Colors.teal}40`,
    height: 52,
    paddingHorizontal: Spacing.md,
  },
  streamingIdText: {
    fontSize: FontSize.md,
    color: Colors.teal,
    fontWeight: '700',
    letterSpacing: 1,
  },
  streamingIdBadge: {
    backgroundColor: `${Colors.teal}20`,
    borderRadius: Radius.full,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
  },
  streamingIdBadgeText: {
    fontSize: FontSize.xs,
    color: Colors.teal,
    fontWeight: '600',
  },

  // ─── Password conditions ──────────────────────────────
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

  // ─── Terms checkbox ───────────────────────────────────
  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
    gap: Spacing.sm,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
    flexShrink: 0,
  },
  checkboxChecked: {
    backgroundColor: Colors.teal,
    borderColor: Colors.teal,
  },
  checkboxError: {
    borderColor: Colors.error,
  },
  checkboxTick: {
    color: Colors.textWhite,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 15,
  },
  termsText: {
    flex: 1,
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  termsLink: {
    color: Colors.teal,
    fontWeight: '600',
  },
  termsErrorText: {
    fontSize: FontSize.xs,
    color: Colors.error,
    marginBottom: Spacing.sm,
    marginLeft: 34,
  },

  // ─── Action button ────────────────────────────────────
  actionBtn: {
    marginTop: Spacing.sm,
  },

  // ─── Already have account ─────────────────────────────
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.lg,
    paddingBottom: 0,
  },
  loginText: {
    fontSize: FontSize.sm,
    color: Colors.textMuted,
  },
  loginLink: {
    fontSize: FontSize.sm,
    color: Colors.teal,
    fontWeight: '600',
    marginLeft: 4,
  },
})