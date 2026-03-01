import { StyleSheet } from 'react-native'
import Colors from '@constants/colors'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 4,
    backgroundColor: Colors.border,
    borderRadius: 999,
    overflow: 'hidden',
    marginBottom: 0,
  },
  fill: {
    height: '100%',
    backgroundColor: Colors.teal,
    borderRadius: 999,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  labelText: {
    fontSize: 12,
    color: Colors.textMuted,
  },
  stepText: {
    fontSize: 12,
    color: Colors.teal,
    fontWeight: '600',
  },
})