// app/+not-found.tsx

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import Colors from '@constants/colors'

export default function NotFoundPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>😕</Text>
      <Text style={styles.title}>Page Not Found</Text>
      <Text style={styles.sub}>This screen does not exist.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/(auth)' as any)}
      >
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.textWhite,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  sub: {
    fontSize: 14,
    color: Colors.textMuted,
    marginBottom: 32,
  },
  button: {
    backgroundColor: Colors.teal,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 999,
  },
  buttonText: {
    color: Colors.textWhite,
    fontWeight: '700',
    fontSize: 15,
  },
})