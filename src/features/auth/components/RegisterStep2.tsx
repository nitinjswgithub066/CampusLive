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

const RegisterStep2: React.FC<Props> = ({ hook }) => {
  const {
    step2,
    errors,
    updateStep2,
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
        <Text style={styles.pageTitle}>Professional Profile 🧑‍💼</Text>
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

      {/* ── Profession — eye-catching label ── */}
      <Dropdown
        label="What best describes you? ✦"
        options={PROFESSION_OPTIONS}
        value={step2.profession}
        onChange={(opt: DropdownOption) => updateStep2('profession', opt.value)}
        placeholder="Select your background"
        error={errors.profession}
      />

      {/* ── Institution Name — shown only for student / ug_pg ── */}
      {showInstitution && (
        <>
          <Input
            placeholder="Institution Name"
            value={step2.institutionName}
            onChangeText={(v) => updateStep2('institutionName', v)}
            error={errors.institutionName}
            autoCapitalize="words"
          />
          {/*
           * TODO: Institution Registration Redirect
           * If the user's institution is not listed or not yet registered
           * on Campus Live, redirect them to register their institution.
           *
           * Options to implement this:
           * 1. Add a "Register your institution" text link below this input
           *    that navigates to: router.push('/(auth)/register-institution')
           *
           * 2. After the user types the name and it does not match
           *    any institution in your database (via API search),
           *    show a suggestion: "Institution not found. Register it here →"
           *
           * 3. Build a separate InstitutionRegisterScreen with:
           *    - Institution name
           *    - Type (college / school / university)
           *    - City and state
           *    - Official email domain (e.g. @iitb.ac.in)
           *    - Admin contact
           *
           * The registered institution then goes through an approval flow
           * on your admin panel before being visible to other users.
           */}
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
        error={errors.mobileNumber}
        keyboardType="phone-pad"
        maxLength={10}
      />

      {/* ── Email ── */}
      <Input
        placeholder="Email"
        value={step2.email}
        onChangeText={(v) => updateStep2('email', v)}
        error={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* ── Continue ── */}
      <Button
        label="Continue"
        onPress={goNext}
        style={styles.actionBtn}
      />

    </View>
  )
}

export default RegisterStep2