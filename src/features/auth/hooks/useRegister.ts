// src/features/auth/hooks/useRegister.ts

import { useState } from 'react'
import { router } from 'expo-router'
import {
  validateStep1,
  validateStep2,
  validateStep3,
  generateStreamingId,
  SHOW_INSTITUTION_FOR,
} from '@features/auth/utils/authHelpers'
import type {
  RegisterStep1Values,
  RegisterStep2Values,
  RegisterStep3Values,
} from '@features/auth/types'

const INITIAL_STEP1: RegisterStep1Values = {
  fullName:  '',
  dobMonth:  '',
  dobDay:    '',
  dobYear:   '',
  gender:    '',
}

const INITIAL_STEP2: RegisterStep2Values = {
  profession:      '',
  institutionName: '',
  invitationCode:  '',
  mobileNumber:    '',
  email:           '',
}

const INITIAL_STEP3: RegisterStep3Values = {
  displayName:     '',
  username:        '',
  streamingId:     generateStreamingId(),
  password:        '',
  confirmPassword: '',
}

const useRegister = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const [step1, setStep1] = useState<RegisterStep1Values>(INITIAL_STEP1)
  const [step2, setStep2] = useState<RegisterStep2Values>(INITIAL_STEP2)
  const [step3, setStep3] = useState<RegisterStep3Values>(INITIAL_STEP3)

  const [errors, setErrors]                   = useState<Record<string, string>>({})
  const [isLoading, setIsLoading]             = useState(false)
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)

  const [isPasswordVisible, setIsPasswordVisible]               = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)

  // ─── Touched state — one object covers all three steps ───────────────────
  // A field only shows its error after the user has blurred it (onBlur)
  // or after they tap Continue / Create Account.
  // On initial load touched is completely empty so nothing is red.

  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const markTouched = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  // ─── Field updaters — clear error on change if field was touched ──────────

  const updateStep1 = (field: keyof RegisterStep1Values, value: string) => {
    setStep1((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const updateStep2 = (field: keyof RegisterStep2Values, value: string) => {
    setStep2((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const updateStep3 = (field: keyof RegisterStep3Values, value: string) => {
    setStep3((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  // ─── Clear a single field error ───────────────────────────────────────────

  const clearError = (field: string) => {
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  // ─── Computed ─────────────────────────────────────────────────────────────

  const showInstitution = SHOW_INSTITUTION_FOR.includes(step2.profession)

  // ─── Navigation ───────────────────────────────────────────────────────────
  // On goNext — mark ALL fields of the current step as touched
  // so errors show on every unfilled field at once

  const markAllStep1Touched = () => {
    setTouched((prev) => ({
      ...prev,
      fullName: true,
      dobMonth: true,
      dobDay:   true,
      dobYear:  true,
      gender:   true,
    }))
  }

  const markAllStep2Touched = () => {
    setTouched((prev) => ({
      ...prev,
      profession:      true,
      institutionName: true,
      mobileNumber:    true,
      email:           true,
    }))
  }

  const markAllStep3Touched = () => {
    setTouched((prev) => ({
      ...prev,
      displayName:     true,
      username:        true,
      password:        true,
      confirmPassword: true,
      terms:           true,
    }))
  }

  const goNext = () => {
    let validationErrors: Record<string, string> = {}

    if (currentStep === 1) {
      markAllStep1Touched()
      validationErrors = validateStep1(step1)
    }
    if (currentStep === 2) {
      markAllStep2Touched()
      validationErrors = validateStep2(step2)
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setCurrentStep((prev) => prev + 1)
  }

  const goBack = () => {
    setErrors({})
    if (currentStep === 1) {
      router.back()
    } else {
      setCurrentStep((prev) => prev - 1)
    }
  }

  // ─── Submit ───────────────────────────────────────────────────────────────

  const handleSubmit = async () => {
    markAllStep3Touched()

    const validationErrors = validateStep3(step3)

    if (!isTermsAccepted) {
      validationErrors.terms = 'You must accept the terms and conditions to continue'
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsLoading(true)
    try {
      // TODO: Replace with real API call
      // await registerMutation({ step1, step2, step3 })
      await new Promise((resolve) => setTimeout(resolve, 1500))
      router.replace('/(auth)/login')
    } catch (error: any) {
      setErrors({ general: error?.message ?? 'Registration failed. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    currentStep,
    totalSteps,
    step1,
    step2,
    step3,
    errors,
    touched,
    isLoading,
    isTermsAccepted,
    isPasswordVisible,
    isConfirmPasswordVisible,
    showInstitution,
    updateStep1,
    updateStep2,
    updateStep3,
    markTouched,
    clearError,
    goNext,
    goBack,
    handleSubmit,
    setIsTermsAccepted,
    togglePassword:        () => setIsPasswordVisible((p) => !p),
    toggleConfirmPassword: () => setIsConfirmPasswordVisible((p) => !p),
  }
}

export default useRegister