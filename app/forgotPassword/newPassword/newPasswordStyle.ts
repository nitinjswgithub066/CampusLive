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
    marginBottom: 30 
  },
  inputWrapper: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
    borderRadius: 15,
    height: 60, 
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#F0F0F0',
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#0c0c0c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
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
    marginTop: 40, 
    borderRadius: 30,
    overflow: 'hidden',
    width: '100%',
    elevation: 8,
    shadowColor: '#181717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonBackground: { 
    height: 50, 
    width: '100%',
    backgroundColor: '#34A853',
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold', 
    textAlign: 'center',
  },
  strengthBarBackground: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginTop: 10,
    width: '100%',
    overflow: 'hidden',
  },
strengthBarFill: {
    height: '100%',
    backgroundColor: '#ff0000', 
    width: '20%', 
    borderRadius: 4,
    opacity: 0.8,
  },
});