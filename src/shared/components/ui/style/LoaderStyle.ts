import { StyleSheet } from 'react-native'
import Colors from '@constants/colors'

export const styles = StyleSheet.create({
  // Full screen centered loader
  fullScreen: {
    flex: 1,
    backgroundColor: Colors.textWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Inline centered loader (inside a card, section etc)
  inline: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
})