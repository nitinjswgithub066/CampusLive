// app/(app)/(tabs)/index.tsx

import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { router } from 'expo-router'
import { useUserStore } from '@store/useStore'
import Colors from '@constants/colors'

export default function HomeTab() {
  const { user, clearUser } = useUserStore()

  const handleLogout = () => {
    clearUser()
    // Must explicitly navigate — app/index.tsx Redirect only runs on mount
    // so it won't react to clearUser() when already inside /(app)/(tabs)
    router.replace('/(auth)') 
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.textWhite}
        translucent={false}
      />

      <Text style={styles.welcome}>Welcome to Campus Live 🎙️</Text>

      {user && (
        <Text style={styles.subtitle}>Logged in as {user.email}</Text>
      )}

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={handleLogout}
        activeOpacity={0.8}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundCard,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  welcome: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textMuted,
    marginBottom: 48,
  },
  logoutBtn: {
    backgroundColor: Colors.error,
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 999,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
})