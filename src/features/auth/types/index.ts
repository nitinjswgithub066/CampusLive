// For authentication related types

export type UserRole = 'viewer' | 'streamer'

export interface LoginFormValues {
  identifier: string        // accepts username, email or mobile number
  password: string
  role: UserRole
}

export interface RegisterFormValues {
  username: string
  email: string
  mobileNumber: string
  password: string
  confirmPassword: string
  role: UserRole
}

export interface AuthUser {
  id: string
  profileId: string
  username: string
  email: string
  mobileNumber: string
  avatarUrl: string
  isStreamer: boolean
  isLoggedIn: boolean
  role: UserRole
}

export interface LoginResponse {
  token: string
  user: AuthUser
}

export interface RegisterResponse {
  token: string
  user: AuthUser
}

export interface ForgotPasswordValues {
  identifier: string        // email or mobile number
}

// For registration step 1

export type GenderType = 'male' | 'female' | 'other' | 'prefer_not_to_say'

export type UserProfession =
  | 'student'
  | 'ug_pg'
  | 'businessman'
  | 'professional'
  | 'other'

export interface RegisterStep1Values {
  fullName: string
  dobMonth: string
  dobDay: string
  dobYear: string
  gender: string
}

export interface RegisterStep2Values {
  profession: string
  institutionName: string        // shown only for student / ug_pg
  invitationCode: string
  mobileNumber: string
  email: string
}

export interface RegisterStep3Values {
  displayName: string
  username: string
  streamingId: string            // auto generated, read only
  password: string
  confirmPassword: string
}

export interface RegisterFormValues {
  step1: RegisterStep1Values
  step2: RegisterStep2Values
  step3: RegisterStep3Values
  role: UserRole
}