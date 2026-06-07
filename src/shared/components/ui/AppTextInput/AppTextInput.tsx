import type { ReactNode } from 'react'
import { Text, TextInput, View } from 'react-native'
import { colors } from '@constants/index'
import { styles } from './stylesheet'

interface AppTextInputProps {
  label: string
  value: string
  onChangeText: (value: string) => void
  placeholder?: string
  secureTextEntry?: boolean
  rightIcon?: ReactNode
  error?: string
}

export function AppTextInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  rightIcon,
  error,
}: AppTextInputProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputRow, error && styles.inputRowError]}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          secureTextEntry={secureTextEntry}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
        {rightIcon}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  )
}
