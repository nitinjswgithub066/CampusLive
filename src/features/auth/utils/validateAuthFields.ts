import type { EmailLoginValues } from '@features/auth/types'

export function validateLoginFields(values: EmailLoginValues): Record<string, string> {
  const errors: Record<string, string> = {}

  if (!values.identifier.trim()) {
    errors.identifier = 'Email or username is required'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  }

  return errors
}
