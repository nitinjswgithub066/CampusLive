import type { ReactNode } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '@constants/colors'
import { typography } from '@constants/fonts'
import { radius } from '@constants/radius'
import { spacing } from '@constants/spacing'

interface AppTextInputProps {
  label: string
  value: string
  onChangeText: (value: string) => void
  placeholder?: string
  secureTextEntry?: boolean
  rightElement?: ReactNode
}

export function AppTextInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  rightElement,
}: AppTextInputProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor={colors.light.textSecondary}
          secureTextEntry={secureTextEntry}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
        {rightElement}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.sm,
    width: '100%',
  },
  label: {
    ...typography.caption,
    color: colors.light.textSecondary,
  },
  inputRow: {
    alignItems: 'center',
    backgroundColor: colors.light.surface,
    borderColor: colors.light.border,
    borderRadius: radius.md,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.sm,
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  input: {
    ...typography.body,
    color: colors.light.textPrimary,
    flex: 1,
    paddingVertical: 0,
  },
})

export default AppTextInput
