import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './newPasswordStyle';

export default function NewPassword() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#34A853" />
      </TouchableOpacity>

      <Text style={styles.header}>Create New Password</Text>
      <Text style={styles.subHeader}>Use at least 8 characters with a mix of letters, numbers and special characters.</Text>

      <View style={styles.inputWrapper}>
        <TextInput 
          style={styles.input} 
          placeholder="New Password" 
          secureTextEntry={!showPass}
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
           <Ionicons name={showPass ? "eye-outline" : "eye-off-outline"} size={20} color="#999" />
        </TouchableOpacity>
      </View>

      <View style={[styles.inputWrapper, { marginTop: 15 }]}>
        <TextInput 
          style={styles.input} 
          placeholder="Confirm New Password" 
          secureTextEntry={!showPass}
          placeholderTextColor="#999"
        />
        <Ionicons name="eye-off-outline" size={20} color="#DDD" />
      </View>

      <View style={styles.strengthBarBackground}>
         <View style={styles.strengthBarFill} />
      </View>

      <TouchableOpacity 
        style={styles.continueButton} 
        onPress={() => router.replace('/signin')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}