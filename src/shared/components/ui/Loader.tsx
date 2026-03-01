import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { styles } from '@shared/components/ui/style/LoaderStyle'
import Colors from '@constants/colors'

interface LoaderProps {
  size?: 'small' | 'large'
  color?: string
  fullScreen?: boolean
}

export const Loader: React.FC<LoaderProps> = ({
  size = 'large',
  color = Colors.teal,
  fullScreen = false,
}) => {
  if (fullScreen) {
    return (
      <View style={styles.fullScreen}>
        <ActivityIndicator size={size} color={color} />
      </View>
    )
  }

  return (
    <View style={styles.inline}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}