import React from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  type TextInputProps,
  type ViewStyle,
} from 'react-native'
import { styles } from '@shared/components/ui/style/InputStyle'
import Colors from '@constants/colors'

interface InputProps extends TextInputProps {
  error?: string
  rightIcon?: React.ReactNode
  onRightIconPress?: () => void
  leftIcon?: React.ReactNode
  containerStyle?: ViewStyle
}

export const Input: React.FC<InputProps> = ({
  error,
  rightIcon,
  onRightIconPress,
  containerStyle,
  style,
  leftIcon,
  ...props
}) => {
  return (
    <View style={[styles.wrapper, containerStyle]}>
      <View style={[styles.inputRow, error ? styles.inputError : null]}>
        {leftIcon && (<View style={styles.leftIconWrapper}>{leftIcon}</View>)}
        <TextInput
          style={[styles.input, leftIcon ? styles.inputWithLeftIcon : null, style]}
          placeholderTextColor={Colors.textMuted}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.iconWrapper}
            activeOpacity={0.7}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  )
}