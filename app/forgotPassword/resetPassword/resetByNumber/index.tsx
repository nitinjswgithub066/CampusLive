import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './resetByNumberStyle';

export default function ResetWithPhone() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#34A853" />
      </TouchableOpacity>

      <Text style={styles.header}>Reset Password</Text>
      <Text style={styles.subHeader}>Enter your registered phone number to receive a code.</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="call-outline" size={20} color="#999" style={{marginRight: 10}} />
        <TextInput 
          style={styles.input} 
          placeholder="Phone Number" 
          placeholderTextColor="#999"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      {/* Solid Green Centered Button */}
      <TouchableOpacity 
        style={styles.continueButton} 
        onPress={() => router.push('/forgotPassword/varificationCode')}
        activeOpacity={0.8}
      >
        <View style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>

      {/* Pressable "Find by email" link */}
      <Pressable 
        onPress={() => router.push('/forgotPassword/resetPassword/resetByMail')} 
        style={styles.linkButton}
      >
        {({ pressed }) => (
          <Text style={[
            styles.linkText, 
            pressed && { color: '#34A853' }
          ]}>
            Use email instead
          </Text>
        )}
      </Pressable>
    </ScrollView>
  );
}