// app/(app)/(tabs)/explore.tsx

import { View, Text, StyleSheet } from 'react-native'
import Colors from '@constants/colors'

// TODO: replace with ExploreScreen when built
// import ExploreScreen from '@features/explore/components/ExploreScreen'
// export default ExploreScreen

export default function ExploreTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore — Coming Soon</Text>
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