// src/features/auth/components/ForgotPasswordMobileScreen.tsx

import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Input } from '@shared/components/ui/Input'
import { Button } from '@shared/components/ui/Button'
import { styles } from './styles/ForgotPasswordMobileScreenStyle'

const ForgotPasswordMobileScreen = () => {
  const [mobile, setMobile]   = useState('')
  const [error, setError]     = useState('')
  const [touched, setTouched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validate = (value: string): string => {
    if (!value.trim()) return 'Mobile number is required'
    if (!/^[6-9]\d{9}$/.test(value)) return 'Enter a valid 10-digit Indian mobile number'
    return ''
  }

const handleContinue = async () => {
  setTouched(true)
  const err = validate(mobile)
  if (err) {
    setError(err)
    return
  }

  setIsLoading(true)
  try {
    // TODO: await sendMobileOtp({ mobile })
    await new Promise((r) => setTimeout(r, 1000))

    // Reuse the same forgot-password screen — passes via and identifier
    // so useForgotPassword knows it is a mobile flow and skips to step 2
    router.push({
      pathname: '/(auth)/forgot-password' as any,
      params: {
        via:        'mobile',
        identifier: mobile,
        step:       '2',
      },
    })
  } catch {
    setError('Failed to send OTP. Please try again.')
  } finally {
    setIsLoading(false)
  }
}

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'left', 'right']}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* ── Line 1: Back arrow ── */}
        <View style={styles.backRow}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
        </View>

        {/* ── Line 2: Heading ── */}
        <Text style={styles.heading}>Find Your Profile 📱</Text>

        {/* ── Line 3: Subheading ── */}
        <Text style={styles.subheading}>
          Enter your registered mobile number and we'll send a verification code to get you back in.
        </Text>

        {/* ── Mobile input ── */}
        <Input
          placeholder="Mobile Number"
          value={mobile}
          onChangeText={(v) => {
            setMobile(v)
            if (touched) setError(validate(v))
          }}
          onBlur={() => {
            setTouched(true)
            setError(validate(mobile))
          }}
          error={touched ? error : undefined}
          keyboardType="phone-pad"
          maxLength={10}
        />

        {/* ── Continue button ── */}
        <Button
          label="Send OTP"
          onPress={handleContinue}
          isLoading={isLoading}
          style={styles.btn}
        />

        {/* ── Try another way ── */}
        <TouchableOpacity
          style={styles.anotherWayContainer}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.anotherWayText}>← Back to recovery options</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPasswordMobileScreen