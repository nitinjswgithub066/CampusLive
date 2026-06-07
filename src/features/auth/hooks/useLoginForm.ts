import { useState } from 'react'
import { validateLoginFields } from '@features/auth/utils/validateAuthFields'

export function useLoginForm() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const nextErrors = validateLoginFields({ identifier, password })
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  return {
    identifier,
    password,
    errors,
    setIdentifier,
    setPassword,
    validate,
  }
}
