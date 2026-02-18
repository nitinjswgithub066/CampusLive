import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './resetByNumberStyle';

export default function ResetPassword() {
  const router = useRouter();
  const [identity, setIdentity] = useState('');

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#34A853" />
      </TouchableOpacity>

      <Text style={styles.header}>Reset Password</Text>
      <Text style={styles.subHeader}>Enter your registered phone number.</Text>

      <View style={styles.inputWrapper}>
        <TextInput 
          style={styles.input} 
          placeholder="Phone Number" 
          placeholderTextColor="#999"
          value={identity}
          onChangeText={setIdentity}
        />
      </View>

      <TouchableOpacity 
        style={styles.continueButton} 
        onPress={() => router.push('/forgotPassword/varificationCode' as any)}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton}
        onPress={() => router.push('/forgotPassword/resetPassword/resetByMail' as any)}
      >
        <Text style={styles.linkText}>Find by email</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}