import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Dimensions,
  type ViewStyle,
} from 'react-native'
import {
  styles,
  OPTION_HEIGHT,
  SHEET_HEADER_HEIGHT,
} from '@shared/components/ui/style/DropdownStyle'

const SCREEN_HEIGHT = Dimensions.get('window').height
const MIN_VISIBLE_OPTIONS = 6
const MAX_SHEET_HEIGHT = SCREEN_HEIGHT * 0.75

export interface DropdownOption {
  label: string
  value: string
}

interface DropdownProps {
  options: DropdownOption[]
  value: string
  onChange: (option: DropdownOption) => void
  placeholder?: string
  label?: string
  containerStyle?: ViewStyle
  variant?: 'default' | 'ghost'
  bottomPadding?: number
  error?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  containerStyle,
  variant = 'default',
  bottomPadding = 0,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const selected = options.find((o) => o.value === value)

  // ─── Dynamic height calculation ───────────────────────
  // Show at least 5 options. If fewer than 5, shrink to fit.
  // If more than 5, cap at 5 visible and enable scroll.
  const visibleCount = Math.min(options.length, MIN_VISIBLE_OPTIONS)
  const listHeight = visibleCount * OPTION_HEIGHT
  const sheetHeight = Math.min(
    SHEET_HEADER_HEIGHT + listHeight + 55, // 55 for bottom padding
    MAX_SHEET_HEIGHT
  )
  const scrollEnabled = options.length > MIN_VISIBLE_OPTIONS
  const triggerTextStyle = variant === 'ghost'
  ? styles.triggerTextGhost
  : styles.triggerText

  return (
    <View style={[variant === 'ghost' ? { marginBottom: 0 } : styles.wrapper,containerStyle]}>

      {/* Label */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Trigger */}
      <TouchableOpacity
        style={[variant === 'ghost' ? styles.triggerTransparent : styles.trigger, error ? styles.triggerError : null]}
        onPress={() => setIsOpen(true)}
        activeOpacity={0.8}
      >
        <Text style={[triggerTextStyle, !selected && styles.placeholder]}>
          {selected ? selected.label : placeholder}
        </Text>
        <Text style={styles.chevron}>▾</Text>
      </TouchableOpacity>
      {error && (<Text style={styles.errorText}>{error}</Text>)}

      {/* Bottom Sheet Modal */}
      <Modal visible={isOpen} transparent animationType="slide">
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          {/* Stop tap inside sheet from closing it */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {}}
          >
            <View>
              <View style={[styles.sheet, { height: sheetHeight },
                bottomPadding > 0 && { paddingBottom: bottomPadding },
              ]}>

                {/* Handle */}
                <View style={styles.sheetHandle} />

                {/* Title */}
                {label && <Text style={styles.sheetTitle}>{label}</Text>}

                {/* Options */}
                <FlatList
                  data={options}
                  keyExtractor={(item) => item.value}
                  scrollEnabled={scrollEnabled}
                  showsVerticalScrollIndicator={scrollEnabled}
                  style={{ height: listHeight }}
                  ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                  )}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.option,
                        item.value === value && styles.optionSelected,
                      ]}
                      onPress={() => {
                        onChange(item)
                        setIsOpen(false)
                      }}
                      activeOpacity={0.7}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          item.value === value && styles.optionTextSelected,
                        ]}
                      >
                        {item.label}
                      </Text>
                      {item.value === value && (
                        <Text style={styles.checkmark}>✓</Text>
                      )}
                    </TouchableOpacity>
                  )}
                />

              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

    </View>
  )
}