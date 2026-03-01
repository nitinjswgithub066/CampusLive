import React from 'react'
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
} from 'react-native'
import Colors from '@constants/colors'
import { FontSize, Radius, Spacing } from '@constants/theme'

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  label: string
  onPress: () => void
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  disabled?: boolean
  style?: ViewStyle
  textStyle?: TextStyle
  fullWidth?: boolean
}

const SIZE_MAP: Record<ButtonSize, { height: number; fontSize: number; paddingHorizontal: number }> = {
  sm: { height: 40, fontSize: FontSize.sm, paddingHorizontal: Spacing.md },
  md: { height: 52, fontSize: FontSize.md, paddingHorizontal: Spacing.lg },
  lg: { height: 60, fontSize: FontSize.lg, paddingHorizontal: Spacing.xl },
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  style,
  textStyle,
  fullWidth = true,
}) => {
  const isDisabled = disabled || isLoading
  const { height, fontSize, paddingHorizontal } = SIZE_MAP[size]

  // ─── Primary ──────────────────────────────────────────
  if (variant === 'primary') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={0.85}
        style={[
          styles.base,
          styles.primary,
          { height, paddingHorizontal },
          fullWidth && styles.fullWidth,
          isDisabled && styles.disabled,
          style,
        ]}
      >
        {isLoading
          ? <ActivityIndicator color={Colors.textWhite} />
          : <Text style={[styles.primaryText, { fontSize }, textStyle]}>{label}</Text>
        }
      </TouchableOpacity>
    )
  }

  // ─── Outline ──────────────────────────────────────────
  if (variant === 'outline') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={0.75}
        style={[
          styles.base,
          styles.outline,
          { height, paddingHorizontal },
          fullWidth && styles.fullWidth,
          isDisabled && styles.disabled,
          style,
        ]}
      >
        {isLoading
          ? <ActivityIndicator color={Colors.teal} />
          : <Text style={[styles.outlineText, { fontSize }, textStyle]}>{label}</Text>
        }
      </TouchableOpacity>
    )
  }

  // ─── Ghost ────────────────────────────────────────────
  if (variant === 'ghost') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={0.6}
        style={[
          styles.base,
          { height, paddingHorizontal },
          fullWidth && styles.fullWidth,
          isDisabled && styles.disabled,
          style,
        ]}
      >
        <Text style={[styles.ghostText, { fontSize }, textStyle]}>{label}</Text>
      </TouchableOpacity>
    )
  }

  // ─── Danger ───────────────────────────────────────────
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.85}
      style={[
        styles.base,
        styles.danger,
        { height, paddingHorizontal },
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {isLoading
        ? <ActivityIndicator color={Colors.textWhite} />
        : <Text style={[styles.primaryText, { fontSize }, textStyle]}>{label}</Text>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.6,
  },

  // ─── Primary ──────────────────────────────────────────
  // TODO: swap backgroundColor back to LinearGradient after rebuild
  primary: {
    backgroundColor: Colors.teal,
  },
  primaryText: {
    color: Colors.textWhite,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  // ─── Outline ──────────────────────────────────────────
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.teal,
  },
  outlineText: {
    color: Colors.teal,
    fontWeight: '600',
    letterSpacing: 0.3,
  },

  // ─── Ghost ────────────────────────────────────────────
  ghostText: {
    color: Colors.teal,
    fontWeight: '500',
  },

  // ─── Danger ───────────────────────────────────────────
  danger: {
    backgroundColor: Colors.error,
  },
})