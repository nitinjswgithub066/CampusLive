import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './newPasswordStyle';

export default function NewPassword() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#34A853" />
      </TouchableOpacity>

      <Text style={styles.header}>Create New Password</Text>
      <Text style={styles.subHeader}>Use at least 8 characters with a mix of letters, numbers and special characters.</Text>

      {/* New Password Input */}
      <View style={styles.inputWrapper}>
        <Ionicons name="lock-closed-outline" size={20} color="#999" style={{marginRight: 10}} />
        <TextInput 
          style={styles.input} 
          placeholder="New Password" 
          secureTextEntry={!showPass}
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={() => setShowPass(!showPass)} style={styles.eyeIcon}>
           <Ionicons name={showPass ? "eye-outline" : "eye-off-outline"} size={22} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputWrapper}>
        <Ionicons name="shield-checkmark-outline" size={20} color="#999" style={{marginRight: 10}} />
        <TextInput 
          style={styles.input} 
          placeholder="Confirm New Password" 
          secureTextEntry={!showConfirmPass}
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={() => setShowConfirmPass(!showConfirmPass)} style={styles.eyeIcon}>
           <Ionicons name={showConfirmPass ? "eye-outline" : "eye-off-outline"} size={22} color="#999" />
        </TouchableOpacity>
      </View>

      <View style={styles.strengthBarBackground}>
         <View style={styles.strengthBarFill} />
      </View>

      {/* Button with LinearGradient for Height */}
      <TouchableOpacity 
        style={styles.continueButton} 
        onPress={() => router.replace('/signin')}
        activeOpacity={0.8}
      >
        <View style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}