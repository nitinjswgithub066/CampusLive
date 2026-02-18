import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF', 
    paddingHorizontal: 25 
  },
  backButton: { 
    marginTop: 50, 
    marginBottom: 20 
  },
  header: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#34A853' 
  },
  subHeader: { 
    fontSize: 14, 
    color: '#666', 
    marginVertical: 10, 
    marginBottom: 30 
  },
  inputWrapper: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 15,
    height: 55,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#EEE',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  input: { 
    flex: 1, 
    fontSize: 16, 
    color: '#000' 
  },
  eyeIcon: {
    padding: 5,
  },
  continueButton: { 
    marginTop: 30, 
    borderRadius: 15, 
    overflow: 'hidden' 
  },
  gradient: { 
    height: 55, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  buttonText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  strengthBarBackground: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginTop: 15,
    width: '100%',
  },
  strengthBarFill: {
    height: 4,
    backgroundColor: '#FFD700',
    width: '40%',
    borderRadius: 2,
  },
});