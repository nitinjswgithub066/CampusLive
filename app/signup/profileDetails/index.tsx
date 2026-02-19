import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './profileDetailsStyle';

export default function ProfileDetails() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#34A853" />
      </TouchableOpacity>

      <Text style={styles.header}>Finalize Your Profile</Text>
      <Text style={styles.subHeader}>Final step! Set your public identity and secure your account.</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="at-outline" size={20} color="#999" style={styles.inputIcon} />
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#999" />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry={!showPassword} 
          placeholderTextColor="#999" 
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#999" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="shield-checkmark-outline" size={20} color="#999" style={styles.inputIcon} />
        <TextInput 
          style={styles.input} 
          placeholder="Confirm Password" 
          secureTextEntry={!showConfirmPassword} 
          placeholderTextColor="#999" 
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Ionicons name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#999" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.nextButton} 
        onPress={() => router.push('/(tabs)')}
      >
        <View style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}