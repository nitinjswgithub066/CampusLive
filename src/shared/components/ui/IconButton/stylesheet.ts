import { StyleSheet } from 'react-native'
import { radius } from '@constants/index'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: radius.round,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  pressed: {
    transform: [{ scale: 0.96 }],
  },
})
