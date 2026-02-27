import { StyleSheet } from 'react-native'
import Colors from '@constants/colors'
import { FontSize, Spacing, Radius } from '@constants/theme'

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundCard,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xxl,
  },

  // ── Line 1 ──
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

  // ── Line 2 ──
  heading: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.textPrimary,
    letterSpacing: -0.3,
    marginBottom: Spacing.sm,
  },

  // ── Line 3 ──
  subheading: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: Spacing.xxl,
  },

  // ── Options card container ──
  optionsContainer: {
    backgroundColor: Colors.textPrimary ?? Colors.backgroundCard,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
    // subtle shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },

  // ── Each option row ──
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },

  // ── Divider between rows ──
  cardDivider: {
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: Spacing.lg,
    opacity: 0.6,
  },

  // ── Icon circle ──
  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: `${Colors.teal}15`,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  iconText: {
    fontSize: 20,
  },

  // ── Text block ──
  optionContent: {
    flex: 1,
    gap: 3,
  },
  optionTitle: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.textPrimary,
    letterSpacing: -0.1,
  },
  optionDescription: {
    fontSize: FontSize.xs,
    color: Colors.textMuted,
    lineHeight: 18,
  },

  // ── Right arrow ──
  arrowText: {
    fontSize: 24,
    color: Colors.textMuted,
    fontWeight: '300',
    lineHeight: 28,
  },
})

export { styles }