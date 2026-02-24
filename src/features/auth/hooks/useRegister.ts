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

// ─── Initial States ───────────────────────────────────────────────────────────

const INITIAL_STEP1: RegisterStep1Values = {
  fullName: '',
  dobMonth: '',
  dobDay: '',
  dobYear: '',
  gender: '',
}

const INITIAL_STEP2: RegisterStep2Values = {
  profession: '',
  institutionName: '',
  invitationCode: '',
  mobileNumber: '',
  email: '',
}

const INITIAL_STEP3: RegisterStep3Values = {
  displayName: '',
  username: '',
  streamingId: generateStreamingId(),   // auto generated on hook init
  password: '',
  confirmPassword: '',
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

const useRegister = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const [step1, setStep1] = useState<RegisterStep1Values>(INITIAL_STEP1)
  const [step2, setStep2] = useState<RegisterStep2Values>(INITIAL_STEP2)
  const [step3, setStep3] = useState<RegisterStep3Values>(INITIAL_STEP3)

  const [errors, setErrors]               = useState<Record<string, string>>({})
  const [isLoading, setIsLoading]         = useState(false)
  const [isPasswordVisible, setIsPasswordVisible]               = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)

  // ─── Field updaters ─────────────────────────────────────────────────────────

  const updateStep1 = (field: keyof RegisterStep1Values, value: string) => {
    setStep1((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const updateStep2 = (field: keyof RegisterStep2Values, value: string) => {
    setStep2((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const updateStep3 = (field: keyof RegisterStep3Values, value: string) => {
    setStep3((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  // ─── Computed ────────────────────────────────────────────────────────────────

  const showInstitution = SHOW_INSTITUTION_FOR.includes(step2.profession)

  // ─── Navigation ──────────────────────────────────────────────────────────────

  const goNext = () => {
    let validationErrors: Record<string, string> = {}

    if (currentStep === 1) validationErrors = validateStep1(step1)
    if (currentStep === 2) validationErrors = validateStep2(step2)

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

  // ─── Submit ──────────────────────────────────────────────────────────────────

  const handleSubmit = async () => {
    const validationErrors = validateStep3(step3)
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
    isLoading,
    isPasswordVisible,
    isConfirmPasswordVisible,
    showInstitution,
    updateStep1,
    updateStep2,
    updateStep3,
    goNext,
    goBack,
    handleSubmit,
    togglePassword:        () => setIsPasswordVisible((p) => !p),
    toggleConfirmPassword: () => setIsConfirmPasswordVisible((p) => !p),
  }
}

export default useRegister