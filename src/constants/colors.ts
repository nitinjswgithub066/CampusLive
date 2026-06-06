export const lightColors = {
  primary: '#FF6B35',
  accent: '#7C4DFF',
  background: '#FFFFFF',
  surface: '#F8F9FC',
  textPrimary: '#121212',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  liveRed: '#FF3040',
  ticket: '#F59E0B',
} as const

export const darkColors = {
  background: '#0D1117',
  surface: '#161B22',
  elevated: '#21262D',
  primary: '#FF6B35',
  accent: '#8B5CF6',
  textPrimary: '#F9FAFB',
  textSecondary: '#9CA3AF',
  border: '#30363D',
} as const

const colors = {
  light: lightColors,
  dark: darkColors,
} as const

export default colors
