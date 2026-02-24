import { StyleSheet, Dimensions } from 'react-native'
import Colors from '@constants/colors'
import { FontSize, Spacing, Radius } from '@constants/theme'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({

  // ─── Line 1: Back arrow alone ─────────────────────────
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xl,
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

  // ─── Line 2: Heading ──────────────────────────────────
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
    maxWidth: width * 0.8,
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
  },

  // ─── Line 3: Progress bar ─────────────────────────────
  progressRow: {
    marginBottom: Spacing.xl,
    alignItems: 'center',
  },
  progressBar: {
    width: '80%',               // 50% width, left aligned
  },

  // ─── DOB row — 3 inline dropdowns side by side ────────
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
    marginTop: Spacing.lg,
  },

  // ─── Already have account row ─────────────────────────
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.xl,
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