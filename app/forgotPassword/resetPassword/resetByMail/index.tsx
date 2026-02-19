import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './resetByMailStyle';
import { Pressable } from 'react-native';

export default function ResetPassword() {
  const router = useRouter();
  const [identity, setIdentity] = useState('');

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#34A853" />
      </TouchableOpacity>

      <Text style={styles.header}>Reset Password</Text>
      <Text style={styles.subHeader}>Enter your register email, username or user ID.</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="mail-outline" size={20} color="#999" style={{marginRight: 10}} />
        <TextInput 
          style={styles.input} 
          placeholder="Email, Username or User ID" 
          placeholderTextColor="#999"
          value={identity}
          onChangeText={setIdentity}
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity 
        style={styles.continueButton} 
        onPress={() => router.push('/forgotPassword/varificationCode')}
        activeOpacity={0.8}
      >
        <View style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton}>
        <Pressable onPress={() => router.push('/forgotPassword/resetPassword/resetByNumber')} style={styles.linkButton}>
          {({ pressed }) => (
            <Text style={[styles.linkText, pressed && { color: '#34A853' }]}>Use mobile number</Text>
          )}
        </Pressable>
      </TouchableOpacity>
    </ScrollView>
  );
}