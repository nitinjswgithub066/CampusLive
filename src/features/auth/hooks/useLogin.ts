import { useState } from 'react'
import { router } from 'expo-router'
import { useUserStore } from '@store/useStore'
import { validateLoginForm, detectIdentifierType } from '@features/auth/utils/authHelpers'
import type { LoginFormValues, UserRole } from '@features/auth/types'

// ─── Initial State ───────────────────────────────────────────────────────────

const INITIAL_FORM: LoginFormValues = {
  identifier: '',
  password: '',
  role: 'viewer',
}

// ─── Hook ────────────────────────────────────────────────────────────────────

const useLogin = () => {
  const { setUser } = useUserStore()

  const [formValues, setFormValues] = useState<LoginFormValues>(INITIAL_FORM)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  // ─── Field Updater ─────────────────────────────────────────────────────────
  // Updates a single field and clears its error on change

  const updateField = (field: keyof LoginFormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  // ─── Role Setter ───────────────────────────────────────────────────────────

  const setRole = (role: UserRole) => {
    setFormValues((prev) => ({ ...prev, role }))
  }

  // ─── Password Visibility ───────────────────────────────────────────────────

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  // ─── Form Reset ────────────────────────────────────────────────────────────

  const resetForm = () => {
    setFormValues(INITIAL_FORM)
    setErrors({})
    setIsPasswordVisible(false)
  }

  // ─── Submit ────────────────────────────────────────────────────────────────

  const handleLogin = async () => {
    // 1. Validate form — if errors exist, show them and stop
    const validationErrors = validateLoginForm(formValues.identifier, formValues.password)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // 2. Detect what type of identifier the user typed
    //    Sends this info to backend so it knows which DB field to query
    const identifierType = detectIdentifierType(formValues.identifier)

    setIsLoading(true)

    try {
      // 3. TODO: Replace this block with your real API call
      //    const response = await loginMutation({
      //      identifier: formValues.identifier,
      //      identifierType,
      //      password: formValues.password,
      //      role: formValues.role,
      //    })
      //    setUser(response.user)

      // ── Simulated API call for now ──
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setUser({
        id: '1',
        profileId: 'profile_001',
        username: formValues.identifier,
        email: identifierType === 'email' ? formValues.identifier : '',
        mobileNumber: identifierType === 'mobile' ? formValues.identifier : '',
        avatarUrl: '',
        isStreamer: formValues.role === 'streamer',
        isLoggedIn: true,
        role: formValues.role,
      })

      // 4. Navigate based on role after successful login
      if (formValues.role === 'streamer') {
        router.replace('/(app)/(tabs)' as any) // Replace with your streamer's main route
      } else {
        router.replace('/(app)/(tabs)' as any) // Replace with your viewer's main route
      }

      resetForm()

    } catch (error: any) {
      // 5. Show backend error message if available, otherwise show generic
      setErrors({
        general: error?.message ?? 'Invalid credentials. Please try again.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  // ─── Return ────────────────────────────────────────────────────────────────

  return {
    formValues,
    errors,
    isLoading,
    isPasswordVisible,
    updateField,
    setRole,
    handleLogin,
    togglePasswordVisibility,
    resetForm,
  }
}

export default useLogin