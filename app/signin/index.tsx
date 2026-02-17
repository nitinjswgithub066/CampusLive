import React, { useState } from 'react';
import {
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  Alert, 
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './signinStyle';
import userData from './data.json';
import { Ionicons } from '@expo/vector-icons';

export default function SignInScreen() {
  const router = useRouter(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Check if input matches any user in our dummy JSON
    const user = userData.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Navigate to the main app tabs
      router.replace('/(tabs)'); 
    } else {
      Alert.alert('Login Failed', 'Invalid email or password. Hint: test@campuslive.com / password123');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <Text style={styles.languageText}>English (US) ⌵</Text>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.brandTitleContainer}>
          <Text style={styles.brandCampus}>Campus </Text>
          <Text style={styles.brandLive}>Live</Text>
        </View>

      <TextInput
        style={styles.inputField}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      
      <View style={styles.passwordContainer}>
        <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword} // [2] Toggle visibility
        placeholderTextColor="#999"
        />
        <TouchableOpacity 
        onPress={() => setShowPassword(!showPassword)}
        style={styles.eyeIcon}
      >
        <Ionicons 
          name={showPassword ? "eye-outline" : "eye-off-outline"} 
          size={20} 
          color="#999" 
        />
      </TouchableOpacity>
      </View>

        <TouchableOpacity style={styles.loginButtonWrapper} activeOpacity={0.8} onPress={handleLogin}>
          <View style={styles.gradientButton}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity 
          style={styles.createAccountBtn}
          onPress={() => router.push('/signup/personalDetails' as any)}
        >
          <Text style={styles.createAccountText}>Create new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}