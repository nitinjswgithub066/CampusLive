import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  type ViewStyle,
} from 'react-native'
import { styles } from '@/src/shared/components/ui/style/InlineDropdownStyle'

export interface InlineDropdownOption {
  label: string
  value: string
}

interface InlineDropdownProps {
  options: InlineDropdownOption[]
  value: string
  onChange: (option: InlineDropdownOption) => void
  placeholder?: string
  containerStyle?: ViewStyle
  error?: string
}

export const InlineDropdown: React.FC<InlineDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select',
  containerStyle,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPos, setDropdownPos] = useState({ x: 0, y: 0, width: 0 })
  const triggerRef = useRef<View>(null)

  const selected = options.find((o) => o.value === value)

  // ── Measure the trigger position so we can place list below it ──
  const openDropdown = () => {
    triggerRef.current?.measure(( _fx, _fy, width, height, px, py) => {
      setDropdownPos({
        x: px,
        y: py + height + 4,   // 4px gap below the trigger
        width,
      })
      setIsOpen(true)
    })
  }

  return (
    <View style={[styles.wrapper, containerStyle]}>

      {/* ── Trigger box ── */}
      <TouchableOpacity
        ref={triggerRef as any}
        style={[
          styles.trigger,
          isOpen && styles.triggerOpen,
          error ? styles.triggerError : null,
        ]}
        onPress={openDropdown}
        activeOpacity={0.8}
      >
        <Text style={[styles.triggerText, !selected && styles.placeholder]}>
          {selected ? selected.label : placeholder}
        </Text>
        <Text style={[styles.chevron, isOpen && styles.chevronOpen]}>▾</Text>
      </TouchableOpacity>

      {/* ── Error ── */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* ── Dropdown list — appears below trigger ── */}
      <Modal visible={isOpen} transparent animationType="none">
        {/* Tap outside to close */}
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View
            style={[
              styles.dropdownList,
              {
                position: 'absolute',
                top: dropdownPos.y,
                left: dropdownPos.x,
                width: dropdownPos.width,
              },
            ]}
          >
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              showsVerticalScrollIndicator
              nestedScrollEnabled
              style={{ maxHeight: 6 * 48 }}   // shows ~4 options, scroll for more
              ItemSeparatorComponent={() => <View style={styles.separator} />}
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
        </TouchableOpacity>
      </Modal>

    </View>
  )
}
