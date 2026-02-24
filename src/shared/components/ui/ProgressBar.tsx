import React from 'react'
import { View, Text, type ViewStyle } from 'react-native'
import { styles } from '@shared/components/ui/style/ProgressBarStyle'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
  containerStyle?: ViewStyle
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  containerStyle,
}) => {
  const progress = (currentStep / totalSteps) * 100

  return (
    <View style={containerStyle}>
      <View style={styles.labelRow}>
        <Text style={styles.labelText}>Step {currentStep} of {totalSteps}</Text>
        <Text style={styles.stepText}>{Math.round(progress)}%</Text>
      </View>
      <View style={styles.container}>
        <View style={[styles.fill, { width: `${progress}%` }]} />
      </View>
    </View>
  )
}