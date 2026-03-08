// src/features/auth/hooks/useLogin.ts

import { useState } from 'react'
import { useLoginMutation } from '@features/auth/services/auth.mutations'
import { validateLoginForm } from '@features/auth/utils/authHelpers'
import type { LoginFormValues, UserRole } from '@features/auth/types'

const INITIAL_FORM: LoginFormValues = {
  identifier: '',
  password:   '',
  role:       'viewer',
}

const useLogin = () => {
  const loginMutation = useLoginMutation()

  const [formValues, setFormValues]           = useState<LoginFormValues>(INITIAL_FORM)
  const [errors, setErrors]                   = useState<Record<string, string>>({})
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

    // Call the login mutation
    loginMutation.mutate({
      identifier: formValues.identifier,
      password: formValues.password,
    })
  }

  return {
    formValues,
    errors,
    touched,
    isLoading: loginMutation.isPending,
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