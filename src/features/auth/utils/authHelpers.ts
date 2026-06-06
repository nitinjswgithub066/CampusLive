import type { DropdownOption } from '@shared/components/ui/Dropdown'
import type {
  RegisterStep1Values,
  RegisterStep2Values,
  RegisterStep3Values,
} from '@features/auth/types'

// ─── Language Options ─────────────────────────────────────────────────────────

export const INDIAN_LANGUAGES: DropdownOption[] = [
  { label: 'English (US)', value: 'en-US' },
  { label: 'English (IN)', value: 'en-IN' },
  // more languages will be added here in the future
]

// ─── Role Options ─────────────────────────────────────────────────────────────

export const ROLE_OPTIONS: DropdownOption[] = [
  { label: '👤  Viewer – Watch streams', value: 'viewer' },
  { label: '🎙️  Streamer – Go Live', value: 'streamer' },
]

// ─── Profession Options ───────────────────────────────────────────────────────

export const PROFESSION_OPTIONS: DropdownOption[] = [
  { label: '🎓  Student', value: 'student' },
  { label: '📚  UG / PG Program', value: 'ug_pg' },
  { label: '💼  Businessman', value: 'businessman' },
  { label: '🧑‍💻  Professional', value: 'professional' },
  { label: '👤  Other', value: 'other' },
]

// ─── Gender Options ───────────────────────────────────────────────────────────

export const GENDER_OPTIONS: DropdownOption[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
]

// ─── Month Options ────────────────────────────────────────────────────────────

export const MONTH_OPTIONS: DropdownOption[] = [
  { label: 'Jan', value: '01' }, { label: 'Feb', value: '02' },
  { label: 'Mar', value: '03' }, { label: 'Apr', value: '04' },
  { label: 'May', value: '05' }, { label: 'Jun', value: '06' },
  { label: 'Jul', value: '07' }, { label: 'Aug', value: '08' },
  { label: 'Sep', value: '09' }, { label: 'Oct', value: '10' },
  { label: 'Nov', value: '11' }, { label: 'Dec', value: '12' },
]

// ─── Day Options ──────────────────────────────────────────────────────────────

export const DAY_OPTIONS: DropdownOption[] = Array.from({ length: 31 }, (_, i) => {
  const day = String(i + 1).padStart(2, '0')
  return { label: day, value: day }
})

// ─── Year Options (last 80 years) ─────────────────────────────────────────────

export const YEAR_OPTIONS: DropdownOption[] = Array.from({ length: 80 }, (_, i) => {
  const year = String(new Date().getFullYear() - i)
  return { label: year, value: year }
})

// ─── Professions that show institution name field ─────────────────────────────

export const SHOW_INSTITUTION_FOR = ['student', 'ug_pg']

// ─── Auto Generate Streaming ID ───────────────────────────────────────────────
// Format: CL-XXXXXX (Campus Live prefix + 6 random alphanumeric chars)
// This is generated on the client side for now.
// See RegisterStep3.tsx for full backend integration instructions.

export const generateStreamingId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const random = Array.from({ length: 6 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join('')
  return `CL-${random}`
}

// ─── Identifier Helper ────────────────────────────────────────────────────────
// Detects if the user typed an email, Indian mobile number, or username.
// Sent to backend so it knows which DB column to query.

export type IdentifierType = 'email' | 'mobile' | 'username'

export const detectIdentifierType = (identifier: string): IdentifierType => {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier)) return 'email'
  if (/^[6-9]\d{9}$/.test(identifier)) return 'mobile'
  return 'username'
}

// ─── Full Name Validation ─────────────────────────────────────────────────────
// Only checks it is not empty and contains letters only.
// No first + last name requirement.

export const validateFullName = (name: string): string => {
  if (!name.trim()) return 'Full name is required'
  if (name.trim().length < 2) return 'Name must be at least 2 characters'
  if (!/^[a-zA-Z\s]+$/.test(name.trim())) return 'Name can only contain letters'
  return ''
}

// ─── Display Name Validation ──────────────────────────────────────────────────
// Allowed: letters, numbers, underscores. Must have at least one letter.

export const validateDisplayName = (name: string): string => {
  if (!name.trim()) return 'Display name is required'
  if (name.trim().length < 3) return 'Display name must be at least 3 characters'
  if (!/^[a-zA-Z0-9_]+$/.test(name.trim())) {
    return 'Only letters, numbers and underscores allowed'
  }
  if (!/[a-zA-Z]/.test(name.trim())) {
    return 'Display name must contain at least one letter'
  }
  return ''
}

// ─── Username Validation ──────────────────────────────────────────────────────
// Only lowercase letters, numbers and underscores.
// Cannot start or end with an underscore.

export const validateUsername = (username: string): string => {
  if (!username.trim()) return 'Username is required'
  if (username.length < 3) return 'Username must be at least 3 characters'
  if (!/^[a-z0-9_]+$/.test(username)) {
    return 'Only lowercase letters, numbers and underscores allowed'
  }
  if (username.startsWith('_') || username.endsWith('_')) {
    return 'Username cannot start or end with an underscore'
  }
  return ''
}

// ─── Password Rules ───────────────────────────────────────────────────────────
// Greater than 6 characters, must have uppercase, lowercase, number,
// and at least one special character.
// Private — only used inside this file via validatePassword()

const PASSWORD_RULES = {
  hasUppercase: /[A-Z]/,
  hasLowercase: /[a-z]/,
  hasNumber: /[0-9]/,
  hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
}

// Used internally for form submit validation (login + register step 3)
const validatePassword = (password: string): string => {
  if (!password) return 'Password is required'
  if (password.length <= 6) return 'Password must be greater than 6 characters'
  if (!PASSWORD_RULES.hasUppercase.test(password)) return 'Must contain at least one uppercase letter'
  if (!PASSWORD_RULES.hasLowercase.test(password)) return 'Must contain at least one lowercase letter'
  if (!PASSWORD_RULES.hasNumber.test(password)) return 'Must contain at least one number'
  if (!PASSWORD_RULES.hasSpecialChar.test(password)) return 'Must contain at least one special character'
  return ''
}

// ─── Password Condition Checker ───────────────────────────────────────────────
// Used in RegisterStep3 to show live conditions as the user types.
// Each condition turns teal + checkmark when fulfilled.
// The entire conditions box hides automatically when all are met.

export interface PasswordCondition {
  label: string
  met: boolean
}

export const getPasswordConditions = (password: string): PasswordCondition[] => [
  {
    label: 'Greater than 6 characters',
    met: password.length > 6,
  },
  {
    label: 'At least one uppercase letter (A-Z)',
    met: PASSWORD_RULES.hasUppercase.test(password),
  },
  {
    label: 'At least one lowercase letter (a-z)',
    met: PASSWORD_RULES.hasLowercase.test(password),
  },
  {
    label: 'At least one number (0-9)',
    met: PASSWORD_RULES.hasNumber.test(password),
  },
  {
    label: 'At least one special character (!@#$...)',
    met: PASSWORD_RULES.hasSpecialChar.test(password),
  },
]

// Returns true only when every single condition is satisfied
export const isPasswordValid = (password: string): boolean =>
  getPasswordConditions(password).every((c) => c.met)

// ─── Login Form Validation ────────────────────────────────────────────────────

export const validateLoginForm = (
  identifier: string,
  password: string
): Record<string, string> => {
  const errors: Record<string, string> = {}

  if (!identifier.trim()) {
    errors.identifier = 'Please enter your username, email or mobile number'
  }

  // On login, only check the field is not empty — do NOT apply strength rules
  if (!password) {
    errors.password = 'Please enter your password'
  }

  return errors
}

// ─── API Login Error Parser ───────────────────────────────────────────────────
// When the real backend is connected, call this with the error from the API.
// The backend should return error codes like:
//   { code: 'USER_NOT_FOUND' }  → identifier field error
//   { code: 'WRONG_PASSWORD' }  → password field error
//   { code: 'ACCOUNT_DISABLED' } → general error

export const parseLoginApiError = (
  error: any
): Record<string, string> => {
  const code: string = error?.response?.data?.code ?? error?.code ?? ''

  switch (code) {
    case 'USER_NOT_FOUND':
    case 'IDENTIFIER_NOT_FOUND':
      return { identifier: 'No account found with this email, username or mobile number' }

    case 'WRONG_PASSWORD':
    case 'INVALID_PASSWORD':
      return { password: 'Incorrect password. Please try again.' }

    case 'ACCOUNT_DISABLED':
      return { general: 'Your account has been disabled. Please contact support.' }

    default:
      return { general: error?.response?.data?.message ?? 'Something went wrong. Please try again.' }
  }
}

// ─── Step 1 Validation ────────────────────────────────────────────────────────

export const validateStep1 = (values: RegisterStep1Values): Record<string, string> => {
  const errors: Record<string, string> = {}

  const nameError = validateFullName(values.fullName)
  if (nameError) errors.fullName = nameError

  if (!values.dobMonth) errors.dobMonth = 'Required'
  if (!values.dobDay) errors.dobDay = 'Required'
  if (!values.dobYear) errors.dobYear = 'Required'
  if (!values.gender) errors.gender = 'Please select your gender'

  return errors
}

// ─── Step 2 Validation ────────────────────────────────────────────────────────

export const validateStep2 = (values: RegisterStep2Values): Record<string, string> => {
  const errors: Record<string, string> = {}

  if (!values.profession) {
    errors.profession = 'Please select your background'
  }

  if (
    SHOW_INSTITUTION_FOR.includes(values.profession) &&
    !values.institutionName.trim()
  ) {
    errors.institutionName = 'Institution name is required'
  }

  if (!values.mobileNumber.trim()) {
    errors.mobileNumber = 'Mobile number is required'
  } else if (!/^[6-9]\d{9}$/.test(values.mobileNumber)) {
    errors.mobileNumber = 'Enter a valid 10-digit Indian mobile number'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address'
  }

  return errors
}

// ─── Step 3 Validation ────────────────────────────────────────────────────────

export const validateStep3 = (values: RegisterStep3Values): Record<string, string> => {
  const errors: Record<string, string> = {}

  const usernameError = validateUsername(values.username)
  if (usernameError) errors.username = usernameError

  const passwordError = validatePassword(values.password)
  if (passwordError) errors.password = passwordError

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password'
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return errors
}
