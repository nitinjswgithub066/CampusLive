// src/features/auth/components/RegisterContact.tsx

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Input } from '@shared/components/ui/Input'
import { Button } from '@shared/components/ui/Button'
import { Dropdown } from '@shared/components/ui/Dropdown'
import { ProgressBar } from '@shared/components/ui/ProgressBar'
import { PROFESSION_OPTIONS } from '@features/auth/utils/authHelpers'
import type { DropdownOption } from '@shared/components/ui/Dropdown'
import { styles } from '@features/auth/components/styles/RegisterFormStyle'
import useRegister from '@features/auth/hooks/useRegister'

interface Props {
  hook: ReturnType<typeof useRegister>
}

const RegisterContact: React.FC<Props> = ({ hook }) => {
  const {
    step2,
    errors,
    touched,
    isLoading,
    updateStep2,
    markTouched,
    goNext,
    goBack,
    showInstitution,
    currentStep,
    totalSteps,
  } = hook

  return (
    <View>

      {/* ── Line 1: Back arrow ── */}
      <View style={styles.backRow}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      </View>

      {/* ── Line 2: Heading ── */}
      <View style={styles.titleRow}>
        <Text style={styles.pageTitle}>Your World 🌍</Text>
        <Text style={styles.pageSubtitle}>
          Tell us what you do and how we can find you.
        </Text>
      </View>

      {/* ── Line 3: Progress bar ── */}
      <View style={styles.progressRow}>
        <View style={styles.progressBar}>
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </View>
      </View>

      {/* ── Profession ── */}
      <Dropdown
        label="What best describes you? ✦"
        options={PROFESSION_OPTIONS}
        value={step2.profession}
        onChange={(opt: DropdownOption) => {
          updateStep2('profession', opt.value)
          markTouched('profession')
        }}
        placeholder="Select your background"
        error={touched.profession ? errors.profession : undefined}
      />

      {/* ── Institution Name — only for student / ug_pg ── */}
      {showInstitution && (
        <>
          <Input
            placeholder="Institution Name"
            value={step2.institutionName}
            onChangeText={(v) => updateStep2('institutionName', v)}
            onBlur={() => markTouched('institutionName')}
            error={touched.institutionName ? errors.institutionName : undefined}
            autoCapitalize="words"
          />
          <TouchableOpacity
            onPress={() => {
              // TODO: router.push('/(auth)/register-institution')
            }}
            style={{ marginTop: -8, marginBottom: 12 }}
          >
            <Text style={{ color: '#00BFA5', fontSize: 13, fontWeight: '500' }}>
              + Register your institution
            </Text>
          </TouchableOpacity>
        </>
      )}

      {/* ── Invitation Code ── */}
      <Input
        placeholder="Invitation Code (Optional)"
        value={step2.invitationCode}
        onChangeText={(v) => updateStep2('invitationCode', v)}
        autoCapitalize="characters"
      />

      {/* ── Mobile Number ── */}
      <Input
        placeholder="Mobile Number"
        value={step2.mobileNumber}
        onChangeText={(v) => updateStep2('mobileNumber', v)}
        onBlur={() => markTouched('mobileNumber')}
        error={touched.mobileNumber ? errors.mobileNumber : undefined}
        keyboardType="phone-pad"
        maxLength={10}
      />

      {/* ── Email ── */}
      <Input
        placeholder="Email"
        value={step2.email}
        onChangeText={(v) => updateStep2('email', v)}
        onBlur={() => markTouched('email')}
        error={touched.email ? errors.email : undefined}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* ── Continue ── */}
      <Button
        label="Continue"
        onPress={goNext}
        isLoading={isLoading}
        style={styles.actionBtn}
      />

    </View>
  )
}

export default RegisterContact