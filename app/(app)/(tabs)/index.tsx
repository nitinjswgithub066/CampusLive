// app/(app)/(tabs)/index.tsx

import { View, Text, StyleSheet } from 'react-native'
import Colors from '@constants/colors'

// TODO: replace with FeedScreen when built
// import FeedScreen from '@features/feed/components/FeedScreen'
// export default FeedScreen

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Feed — Coming Soon</Text>
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