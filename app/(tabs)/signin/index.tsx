import React from 'react';
import {
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  
} from 'react-native';

import styles from './signinStyle';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      {/* Language Selector Area */}
      <View style={styles.languageContainer}>
        <Text style={styles.languageText}>English (US) ⌵</Text>
      </View>

      <View style={styles.mainContent}>
        {/* Branding */}
        {/* <Image 
          source={require('@/assets/images/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        /> */}
        
        <View style={styles.brandTitleContainer}>
          <Text style={styles.brandCampus}>Campus </Text>
          <Text style={styles.brandLive}>Live</Text>
        </View>

        {/* Inputs */}
        <TextInput
          style={styles.inputField}
          placeholder="Username, email, mobile number"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />

        {/* Log In Button */}
        <TouchableOpacity style={styles.loginButtonWrapper} activeOpacity={0.8}>
          <View
            style={styles.gradientButton}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Action */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.createAccountBtn}>
          <Text style={styles.createAccountText}>Create new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
