import Svg, { Circle, Path, Polygon } from 'react-native-svg'
import colors from '@constants/colors'

interface AppLogoProps {
  size?: number
}

export function AppLogo({ size = 96 }: AppLogoProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 120 120" accessibilityRole="image">
      <Circle cx="60" cy="60" r="54" fill={colors.light.surface} />
      <Path
        d="M21 52C24 35 37 22 54 17L78 31L49 43Z"
        fill="#0E9AA7"
      />
      <Path
        d="M60 15C78 15 93 24 102 38L93 60L74 27Z"
        fill="#22B8A8"
      />
      <Path
        d="M104 41C111 54 111 68 105 81L80 84L95 65Z"
        fill="#87CF5D"
      />
      <Path
        d="M100 88C90 103 74 111 56 108L45 84L77 92Z"
        fill="#5FCB77"
      />
      <Path
        d="M49 106C31 102 19 89 15 72L34 50L40 85Z"
        fill="#18A3A8"
      />
      <Path
        d="M16 64C14 48 20 34 32 24L48 45L28 57Z"
        fill="#008FA0"
      />
      <Polygon points="53,43 53,79 84,61" fill="#38BFA1" />
      <Circle cx="60" cy="60" r="55" fill="none" stroke={colors.light.background} strokeWidth="4" />
    </Svg>
  )
}

export default AppLogo
