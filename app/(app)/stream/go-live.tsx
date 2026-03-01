// app/(app)/stream/go-live.tsx

import { View, Text, StyleSheet } from 'react-native'
import Colors from '@constants/colors'

// TODO: replace with GoLiveScreen when built
// import GoLiveScreen from '@features/stream/components/GoLiveScreen'
// export default GoLiveScreen

export default function GoLivePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Go Live — Coming Soon</Text>
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
    color: Colors.textSecondary,
    fontSize: 16,
  },
})