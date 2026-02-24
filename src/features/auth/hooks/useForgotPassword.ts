import { useState, useEffect, useRef } from 'react'
import { router } from 'expo-router'
import {getPasswordConditions, isPasswordValid } from '@features/auth/utils/authHelpers'

// ─── Timer constants ─────────────────────────────────────────────────────────

const OTP_DURATION_SECONDS = 60

// ─── Hook ────────────────────────────────────────────────────────────────────

const useForgotPassword = () => {
  const [currentStep, setCurrentStep]     = useState(1)
  const totalSteps = 3

  // ── Step 1 ──────────────────────────────────────────────────────────────────
  const [identifier, setIdentifier]       = useState('')

  // ── Step 2 ──────────────────────────────────────────────────────────────────
  const [otp, setOtp]                     = useState('')
  const [secondsLeft, setSecondsLeft]     = useState(OTP_DURATION_SECONDS)
  const [canResend, setCanResend]         = useState(false)
  const timerRef                          = useRef<ReturnType<typeof setInterval> | null>(null)

  // ── Step 3 ──────────────────────────────────────────────────────────────────
  const [newPassword, setNewPassword]             = useState('')
  const [confirmPassword, setConfirmPassword]     = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmVisible, setIsConfirmVisible]   = useState(false)

  // ── Shared ──────────────────────────────────────────────────────────────────
  const [errors, setErrors]               = useState<Record<string, string>>({})
  const [isLoading, setIsLoading]         = useState(false)

  // ─── Timer logic ─────────────────────────────────────────────────────────────
  // Starts when user reaches step 2. Counts down from 60 to 0.
  // When it hits 0, resend button becomes active (turns teal).

  const startTimer = () => {
    setSecondsLeft(OTP_DURATION_SECONDS)
    setCanResend(false)

    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          setCanResend(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  // Format seconds as MM:SS — e.g. 60 → "01:00", 9 → "00:09"
  const formattedTimer = `${String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:${String(secondsLeft % 60).padStart(2, '0')}`

  // ─── Resend OTP ──────────────────────────────────────────────────────────────

  const handleResend = async () => {
    if (!canResend) return
    setOtp('')
    setErrors({})

    try {
      // TODO: Call resend OTP API
      // await resendOtpMutation({ identifier })
      await new Promise((r) => setTimeout(r, 500))
      startTimer()
    } catch (error: any) {
      setErrors({ general: error?.message ?? 'Failed to resend code. Try again.' })
    }
  }

  // ─── Step navigation ─────────────────────────────────────────────────────────

  const goBack = () => {
    setErrors({})
    if (currentStep === 1) {
      router.back()
    } else {
      setCurrentStep((prev) => prev - 1)
    }
  }

  // ─── Step 1 submit ───────────────────────────────────────────────────────────

  const handleStep1 = async () => {
    if (!identifier.trim()) {
      setErrors({ identifier: 'Please enter your email, username or User ID' })
      return
    }

    setIsLoading(true)
    try {
      // TODO: Call forgot password API
      // await forgotPasswordMutation({ identifier })
      await new Promise((r) => setTimeout(r, 1200))
      setErrors({})
      setCurrentStep(2)
      startTimer()             // start OTP countdown as soon as step 2 opens
    } catch (error: any) {
      setErrors({ general: error?.message ?? 'Account not found. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  // ─── Step 2 submit ───────────────────────────────────────────────────────────

  const handleStep2 = async () => {
    if (otp.trim().length !== 6) {
      setErrors({ otp: 'Please enter the 6-digit code' })
      return
    }

    setIsLoading(true)
    try {
      // TODO: Call verify OTP API
      // await verifyOtpMutation({ identifier, otp })
      await new Promise((r) => setTimeout(r, 1200))
      setErrors({})
      setCurrentStep(3)
    } catch (error: any) {
      setErrors({ general: error?.message ?? 'Invalid code. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  // ─── Step 3 submit ───────────────────────────────────────────────────────────

  const handleStep3 = async () => {
    const errs: Record<string, string> = {}

    if (!isPasswordValid(newPassword)) {
      errs.newPassword = 'Password does not meet all requirements'
    }

    if (!confirmPassword) {
      errs.confirmPassword = 'Please confirm your password'
    } else if (newPassword !== confirmPassword) {
      errs.confirmPassword = 'Passwords do not match'
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setIsLoading(true)
    try {
      // TODO: Call reset password API
      // await resetPasswordMutation({ identifier, otp, newPassword })
      await new Promise((r) => setTimeout(r, 1500))
      router.replace('/(auth)/login')
    } catch (error: any) {
      setErrors({ general: error?.message ?? 'Failed to reset password. Try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  // ─── Maybe Later ─────────────────────────────────────────────────────────────

  const handleMaybeLater = () => {
    router.replace('/(auth)/login')
  }

  // ─── Password conditions for live checker ────────────────────────────────────

  const passwordConditions = getPasswordConditions(newPassword)
  const allConditionsMet   = isPasswordValid(newPassword)

  return {
    // state
    currentStep,
    totalSteps,
    identifier,
    otp,
    newPassword,
    confirmPassword,
    errors,
    isLoading,
    isPasswordVisible,
    isConfirmVisible,
    canResend,
    formattedTimer,
    secondsLeft,
    passwordConditions,
    allConditionsMet,

    // setters
    setIdentifier,
    setOtp,
    setNewPassword,
    setConfirmPassword,
    togglePassword:        () => setIsPasswordVisible((p) => !p),
    toggleConfirmPassword: () => setIsConfirmVisible((p) => !p),

    // actions
    goBack,
    handleStep1,
    handleStep2,
    handleStep3,
    handleResend,
    handleMaybeLater,
  }
}

export default useForgotPassword