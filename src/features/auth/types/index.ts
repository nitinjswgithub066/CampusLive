export type LoginMethod = 'google' | 'facebook' | 'apple' | 'email'

export interface EmailLoginValues {
  identifier: string
  password: string
}
