// app/(app)/(tabs)/profile.tsx

import { View, Text, StyleSheet } from 'react-native'
import Colors from '@constants/colors'

// TODO: replace with ProfileScreen when built
// import ProfileScreen from '@features/profile/components/ProfileScreen'
// export default ProfileScreen

export default function ProfileTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile — Coming Soon</Text>
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