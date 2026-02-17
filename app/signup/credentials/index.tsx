import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './credentialsStyle';

export default function Credentials() {
  const router = useRouter();
  const [college, setCollege] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#34A853" />
      </TouchableOpacity>

      <Text style={styles.header}>Campus Credentials</Text>
      <Text style={styles.subHeader}>Connect with your campus community.</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="school-outline" size={20} color="#999" style={styles.inputIcon} />
        <TextInput 
          style={styles.input} 
          placeholder="College / School Name" 
          value={college}
          onChangeText={setCollege}
          placeholderTextColor="#999" 
        />
        <Ionicons name="chevron-down" size={20} color="#999" />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="call-outline" size={20} color="#999" style={styles.inputIcon} />
        <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" placeholderTextColor="#999" />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" placeholderTextColor="#999" />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="key-outline" size={20} color="#999" style={styles.inputIcon} />
        <TextInput style={styles.input} placeholder="Invitation Code (Optional)" placeholderTextColor="#999" />
      </View>

      <TouchableOpacity 
        style={styles.nextButton} 
        onPress={() => router.push('/signup/profileDetails' as any)}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}