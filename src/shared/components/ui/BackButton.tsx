// src/shared/components/ui/BackButton.tsx

import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'
import Colors from '@constants/colors'
import { Spacing } from '@constants/theme'
import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  onPress: () => void
}

const BackButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.7}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <MaterialIcons
        name="arrow-back-ios"
        size={28}
        color={Colors.textPrimary}
      />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
  button: {
    paddingVertical: Spacing.xs,
    paddingRight: Spacing.sm,
    alignSelf: 'flex-start',
  },
})