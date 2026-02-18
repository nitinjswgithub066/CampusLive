import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './varificationCodeStyle';

export default function VerifyCode() {
  const router = useRouter();
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#34A853" />
      </TouchableOpacity>

      <Text style={styles.header}>Enter Verification Code</Text>
      <Text style={styles.subHeader}>We've sent a 6-digit code to your registered email id and mobile number.</Text>

      <View style={styles.codeRow}>
        <TextInput 
          style={styles.codeInput} 
          placeholder="Enter code" 
          placeholderTextColor="#999"
          keyboardType="number-pad"
          maxLength={6}
          onChangeText={setCode}
        />
        <Text style={styles.timer}>00:59</Text>
      </View>

      <Text style={styles.resendText}>Didn't receive the code? <Text style={styles.resendLink}>Resend Code</Text></Text>

      <TouchableOpacity 
        style={styles.continueButton} 
        onPress={() => router.push('/forgotPassword/newPassword' as any)}
      >
          <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>Try another way</Text>
      </TouchableOpacity>
    </View>
  );
}