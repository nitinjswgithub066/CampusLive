import { StyleSheet, Dimensions } from 'react-native'
import Colors from '@constants/colors'
import { FontSize } from '@constants/theme'

const { width } = Dimensions.get('window')
export const LOGO_SIZE = width * 0.42

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.textWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ─── Logo ─────────────────────────────────────────────
  logoContainer: {
    marginBottom: 20,
  },
  logoCircle: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: Colors.textWhite,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    // subtle shadow
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

  // ─── Play Button in center ────────────────────────────
  playCenter: {
    width: LOGO_SIZE * 0.36,
    height: LOGO_SIZE * 0.36,
    borderRadius: LOGO_SIZE * 0.18,
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
    marginLeft: LOGO_SIZE * 0.03,   // nudge right so it looks centered visually
  },

  // ─── Brand Name ───────────────────────────────────────
  brandContainer: {
    marginTop: 8,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  brandCampus: {
    fontSize: FontSize.xxl,
    fontWeight: '900',
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  brandLive: {
    fontSize: FontSize.xxl,
    fontWeight: '900',
    color: Colors.teal,
    letterSpacing: -0.5,
  },
})

export default styles
