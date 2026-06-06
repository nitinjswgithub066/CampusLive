import { Platform } from 'react-native'

export const shadows = {
  soft: Platform.select({
    ios: {
      shadowColor: '#121212',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.08,
      shadowRadius: 16,
    },
    android: {
      elevation: 3,
    },
    default: {},
  }),
} as const

export default shadows
