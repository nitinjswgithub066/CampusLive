import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './credentialsStyle';

export default function Credentials() {
  const router = useRouter();
  
  const [role, setRole] = useState('');
  const [college, setCollege] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const roles = ["Student", "UG Program", "PG Program", "Faculty", "Alumni", "Other"];
  const studentRoles = ["Student", "UG Program", "PG Program"];

  const selectRole = (item: string) => {
    setRole(item);
    setIsModalVisible(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#34A853" />
      </TouchableOpacity>

      <Text style={styles.header}>Campus Credentials</Text>
      <Text style={styles.subHeader}>Connect with your campus community.</Text>

      {/* Role Selection Dropdown Trigger */}
      <TouchableOpacity 
        style={styles.inputWrapper} 
        onPress={() => setIsModalVisible(true)}
      >
        <Ionicons name="person-circle-outline" size={20} color="#999" style={styles.inputIcon} />
        <Text style={[styles.input, !role && { color: '#999' }]}>
          {role || "Select Role (Student, Faculty, etc.)"}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#999" />
      </TouchableOpacity>

      {/* Role Picker Modal */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Your Role</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={roles}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.roleItem} onPress={() => selectRole(item)}>
                  <Text style={[styles.roleText, role === item && { color: '#34A853', fontWeight: 'bold' }]}>
                    {item}
                  </Text>
                  {role === item && <Ionicons name="checkmark" size={20} color="#34A853" />}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Conditional Rendering: Only show if a student role is selected */}
      {studentRoles.includes(role) && (
        <View style={styles.inputWrapper}>
          <Ionicons name="school-outline" size={20} color="#999" style={styles.inputIcon} />
          <TextInput 
            style={styles.input} 
            placeholder="College / School Name" 
            value={college}
            onChangeText={setCollege}
            placeholderTextColor="#999" 
          />
        </View>
      )}

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
        <View style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}