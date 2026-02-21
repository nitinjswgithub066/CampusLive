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
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    height: 60,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#F0F0F0',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  input: { 
    flex: 1, 
    fontSize: 16, 
    color: '#000' 
  },
  continueButton: { 
    marginTop: 30, 
    borderRadius: 30, 
    overflow: 'hidden',
    width: '100%',
    elevation: 8,
    shadowColor: '#000',
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
  },
  buttonText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  linkButton: {
    marginTop: 5,
    alignItems: 'center',
    padding: 10,
  },
  linkText: { 
    color: '#666', 
    fontSize: 16, 
    fontWeight: '500' 
  },
});