export type IconSet = 'ionicons' | 'fontAwesome'

export interface AppIconProps {
  name: string
  set?: IconSet
  size?: number
  color?: string
}
