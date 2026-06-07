export const fontWeights = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: fontWeights.bold,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: fontWeights.semiBold,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: fontWeights.semiBold,
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    fontWeight: fontWeights.medium,
    lineHeight: 24,
  },
  small: {
    fontSize: 14,
    fontWeight: fontWeights.regular,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: fontWeights.medium,
    lineHeight: 16,
  },
} as const
