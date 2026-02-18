import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingHorizontal: 25 },
  backButton: { marginTop: 50, marginBottom: 20 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#34A853' },
  subHeader: { fontSize: 14, color: '#666', marginVertical: 10, marginBottom: 30 },
  inputWrapper: {
    backgroundColor: '#F9F9F9',
    borderRadius: 15,
    height: 55,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#EEE',
    elevation: 2,
  },
  input: { fontSize: 16, color: '#000' },
  continueButton: { marginTop: 30, borderRadius: 15, overflow: 'hidden' },
  gradient: { height: 55, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  linkButton: { marginTop: 25, alignItems: 'center' },
  linkText: { color: '#666', fontSize: 14, fontWeight: '500' },
});