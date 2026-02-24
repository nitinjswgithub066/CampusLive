// app/(app)/modal.tsx

import { View, Text, StyleSheet } from 'react-native'
import Colors from '@constants/colors'

export default function ModalPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Modal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.textWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.textPrimary,
    fontSize: 16,
  },
})