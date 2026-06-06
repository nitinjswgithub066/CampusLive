import Svg, { Circle, Path, Rect } from 'react-native-svg'
import colors from '@constants/colors'

interface WelcomeIllustrationProps {
  width?: number
  height?: number
}

export function WelcomeIllustration({
  width = 280,
  height = 180,
}: WelcomeIllustrationProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 280 180" accessibilityRole="image">
      <Circle cx="72" cy="72" r="44" fill="#FFF1EB" />
      <Circle cx="214" cy="68" r="38" fill="#F0EBFF" />
      <Rect x="42" y="64" width="196" height="92" rx="14" fill={colors.light.surface} />
      <Rect x="62" y="82" width="74" height="12" rx="6" fill={colors.light.primary} />
      <Rect x="62" y="104" width="118" height="10" rx="5" fill={colors.light.border} />
      <Rect x="62" y="124" width="92" height="10" rx="5" fill={colors.light.border} />
      <Path d="M190 94L222 112L190 130Z" fill="#38BFA1" />
      <Circle cx="222" cy="42" r="10" fill={colors.light.ticket} />
      <Circle cx="42" cy="126" r="8" fill={colors.light.accent} />
    </Svg>
  )
}

export default WelcomeIllustration
