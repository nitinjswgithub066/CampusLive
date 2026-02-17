import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import the router

export default function WelcomeScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/signin'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back to</Text>
      <Text style={styles.brandText}>Campus Live</Text>
      <Text style={styles.subText}>You are now logged in!</Text>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcomeText: {
    fontSize: 20,
    color: '#666',
  },
  brandText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#34A853', 
  },
  subText: {
    marginTop: 10,
    color: '#999',
    marginBottom: 40,
  },
  logoutButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FF4D4D',
  },
  logoutText: {
    color: '#FF4D4D',
    fontWeight: 'bold',
    fontSize: 16,
  },
});