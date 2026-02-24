import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Input } from '@shared/components/ui/Input'
import { Button } from '@shared/components/ui/Button'
import { Dropdown } from '@shared/components/ui/Dropdown'
import { InlineDropdown } from '@shared/components/ui/InlineDropdown'
import { ProgressBar } from '@shared/components/ui/ProgressBar'
import {
  GENDER_OPTIONS,
  MONTH_OPTIONS,
  DAY_OPTIONS,
  YEAR_OPTIONS,
} from '@features/auth/utils/authHelpers'
import type { DropdownOption } from '@shared/components/ui/Dropdown'
import type { InlineDropdownOption } from '@shared/components/ui/InlineDropdown'
import { styles } from '@features/auth/components/styles/RegisterFormStyle'
import useRegister from '@features/auth/hooks/useRegister'

interface Props {
  hook: ReturnType<typeof useRegister>
}

const RegisterStep1: React.FC<Props> = ({ hook }) => {
  const {
    step1,
    errors,
    updateStep1,
    goNext,
    goBack,
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
        <Text style={styles.pageTitle}>Who Are You? 👋</Text>
        <Text style={styles.pageSubtitle}>
          Every great journey starts with a good name.
        </Text>
      </View>

      {/* ── Line 3: Progress bar ── */}
      <View style={styles.progressRow}>
        <View style={styles.progressBar}>
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </View>
      </View>

      {/* ── Full Name — no first/last name condition ── */}
      <Input
        placeholder="Full Name"
        value={step1.fullName}
        onChangeText={(v) => updateStep1('fullName', v)}
        error={errors.fullName}
        autoCapitalize="words"
        autoCorrect={false}
      />

      {/* ── Date of Birth — inline dropdowns open below ── */}
      <Text style={styles.dobLabel}>Date of Birth</Text>
      <View style={styles.dobRow}>
        <InlineDropdown
          options={MONTH_OPTIONS}
          value={step1.dobMonth}
          onChange={(opt: InlineDropdownOption) =>
            updateStep1('dobMonth', opt.value)
          }
          placeholder="MM"
          error={errors.dobMonth}
        />
        <InlineDropdown
          options={DAY_OPTIONS}
          value={step1.dobDay}
          onChange={(opt: InlineDropdownOption) =>
            updateStep1('dobDay', opt.value)
          }
          placeholder="DD"
          error={errors.dobDay}
        />
        <InlineDropdown
          options={YEAR_OPTIONS}
          value={step1.dobYear}
          onChange={(opt: InlineDropdownOption) =>
            updateStep1('dobYear', opt.value)
          }
          placeholder="YYYY"
          error={errors.dobYear}
        />
      </View>

      {/* ── Gender — still uses bottom sheet Dropdown ── */}
      <Dropdown
        label="Select Gender"
        options={GENDER_OPTIONS}
        value={step1.gender}
        onChange={(opt: DropdownOption) => updateStep1('gender', opt.value)}
        placeholder="Select Gender"
        error={errors.gender}
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

export default RegisterStep1