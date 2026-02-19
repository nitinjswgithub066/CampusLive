import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './personalDetailsStyle';

export default function PersonalDetails() {
  const router = useRouter();
  const [gender, setGender] = useState<string | null>(null);
  
  // States for Date of Birth
  const [day, setDay] = useState<string | null>(null);
  const [month, setMonth] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#34A853" />
      </TouchableOpacity>

      <Text style={styles.header}>Personal Identity</Text>
      <Text style={styles.subHeader}>Tell us a bit about yourself to get started.</Text>

      <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#999" />

      {/* Date of Birth Selection */}
      <View style={styles.dobContainer}>

        {/* Month Box */}
        <TouchableOpacity style={styles.dobBox} onPress={() => {/* Logic to open Month picker */}}>
          <Text style={month ? styles.dobText : styles.placeholderText}>{month || 'MM'}</Text>
          <Ionicons name="chevron-down" size={16} color="#34A853" />
        </TouchableOpacity>

        {/* Day Box */}
        <TouchableOpacity style={styles.dobBox} onPress={() => {/* Logic to open Day picker */}}>
          <Text style={day ? styles.dobText : styles.placeholderText}>{day || 'DD'}</Text>
          <Ionicons name="chevron-down" size={16} color="#34A853" />
        </TouchableOpacity>

        {/* Year Box */}
        <TouchableOpacity style={styles.dobBox} onPress={() => {/* Logic to open Year picker */}}>
          <Text style={year ? styles.dobText : styles.placeholderText}>{year || 'YYYY'}</Text>
          <Ionicons name="chevron-down" size={16} color="#34A853" />
        </TouchableOpacity>
      </View>

      {/* Gender Selection Block */}
      <Text style={styles.genderLabel}>Select Gender</Text>
      <View style={styles.genderContainer}>
        {['Male', 'Female', 'Other'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.genderOption,
              gender === item && styles.genderOptionSelected
            ]}
            onPress={() => setGender(item)}
          >
            <Text style={[
              styles.genderText,
              gender === item && styles.genderTextSelected
            ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TouchableOpacity 
        style={styles.nextButton} 
        onPress={() => router.push('/signup/credentials' as any)}
        activeOpacity={0.8}
      >
        <View style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}