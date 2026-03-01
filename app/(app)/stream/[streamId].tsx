// app/(app)/stream/[streamId].tsx

import { View, Text, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import Colors from '@constants/colors'

// TODO: replace with StreamScreen when built
// import StreamScreen from '@features/stream/components/StreamScreen'
// export default StreamScreen

export default function StreamPage() {
  const { streamId } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stream: {streamId}</Text>
      <Text style={styles.sub}>Stream Player — Coming Soon</Text>
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
    fontSize: 18,
    fontWeight: '700',
  },
  sub: {
    color: Colors.textMuted,
    fontSize: 14,
    marginTop: 8,
  },
})