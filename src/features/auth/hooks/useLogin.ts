// src/features/auth/hooks/useLogin.ts

import { useState } from 'react'
import { router } from 'expo-router'
import { useUserStore } from '@store/useStore'
import { validateLoginForm, detectIdentifierType } from '@features/auth/utils/authHelpers'
import type { LoginFormValues, UserRole } from '@features/auth/types'

const DUMMY_CREDENTIALS = {
  email:    'admin@campuslive.com',
  password: 'Admin@123',
}

const INITIAL_FORM: LoginFormValues = {
  identifier: '',
  password:   '',
  role:       'viewer',
}

const useLogin = () => {
  const { setUser } = useUserStore()

  const [formValues, setFormValues]           = useState<LoginFormValues>(INITIAL_FORM)
  const [errors, setErrors]                   = useState<Record<string, string>>({})
  const [isLoading, setIsLoading]             = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  // ─── Touched state ────────────────────────────────────────────────────────
  // A field is only validated after the user has interacted with it (onBlur)
  // or after they attempt to submit the form.
  // On initial load touched is empty so no errors show at all.

  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const markTouched = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))

    // Validate this single field on blur
    const currentErrors = validateLoginForm(formValues.identifier, formValues.password)
    setErrors((prev) => ({
      ...prev,
      [field]: currentErrors[field] ?? '',
    }))
  }

  // ─── Field updater ────────────────────────────────────────────────────────
  // Clears the error for a field as the user starts typing again

  const updateField = (field: keyof LoginFormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const setRole = (role: UserRole) => {
    setFormValues((prev) => ({ ...prev, role }))
  }

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev)

  const resetForm = () => {
    setFormValues(INITIAL_FORM)
    setErrors({})
    setTouched({})
    setIsPasswordVisible(false)
  }

  // ─── Submit ───────────────────────────────────────────────────────────────
  // Marks all fields as touched so errors show on every field at once

  const handleLogin = async () => {
    // Mark all fields touched on submit attempt
    setTouched({ identifier: true, password: true })

    const validationErrors = validateLoginForm(formValues.identifier, formValues.password)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const identifierType = detectIdentifierType(formValues.identifier)
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const enteredIdentifier = formValues.identifier.trim().toLowerCase()
      const isEmailMatch =
        identifierType === 'email' &&
        enteredIdentifier === DUMMY_CREDENTIALS.email.toLowerCase()
      const isUsernameMatch =
        identifierType === 'username' &&
        enteredIdentifier === DUMMY_CREDENTIALS.email.split('@')[0].toLowerCase()

      if (!isEmailMatch && !isUsernameMatch) {
        setErrors({ identifier: 'No account found with this email, username or mobile number' })
        return
      }

      if (formValues.password !== DUMMY_CREDENTIALS.password) {
        setErrors({ password: 'Incorrect password. Please try again.' })
        return
      }

      setUser({
        id:           '1',
        profileId:    'profile_001',
        username:     formValues.identifier,
        email:        identifierType === 'email' ? formValues.identifier : '',
        mobileNumber: '',
        avatarUrl:    '',
        isLoggedIn:   true,
        role:         formValues.role,
        isStreamer:   false,
      })

      resetForm()
      router.replace('/(app)/(tabs)' as any)

    } catch (error: any) {
      setErrors({ general: error?.message ?? 'Something went wrong. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    formValues,
    errors,
    touched,
    isLoading,
    isPasswordVisible,
    updateField,
    markTouched,
    setRole,
    handleLogin,
    togglePasswordVisibility,
    resetForm,
  }
}

export default useLogin