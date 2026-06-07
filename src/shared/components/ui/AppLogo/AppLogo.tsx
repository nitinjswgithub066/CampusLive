import { View } from 'react-native'
import Svg, { Circle, Path } from 'react-native-svg'
import { styles } from './stylesheet'

interface AppLogoProps {
  size?: number
}

export function AppLogo({ size = 96 }: AppLogoProps) {
  return (
    <View style={styles.wrapper}>
      <Svg width={size} height={size} viewBox="0 0 120 120" accessibilityRole="image">
        <Circle cx="60" cy="60" r="54" fill="#FFFFFF" />
        <Path d="M21 52C24 35 37 22 54 17L78 31L49 43L21 52Z" fill="#0E9AA7" />
        <Path d="M60 15C78 15 93 24 102 38L93 60L74 27L60 15Z" fill="#22B8A8" />
        <Path d="M104 41C111 54 111 68 105 81L80 84L95 65L104 41Z" fill="#87CF5D" />
        <Path d="M100 88C90 103 74 111 56 108L45 84L77 92L100 88Z" fill="#5FCB77" />
        <Path d="M49 106C31 102 19 89 15 72L34 50L40 85L49 106Z" fill="#18A3A8" />
        <Path d="M16 64C14 48 20 34 32 24L48 45L28 57L16 64Z" fill="#008FA0" />
        <Path d="M53 43L53 79L84 61L53 43Z" fill="#38BFA1" />
      </Svg>
    </View>
  )
}
