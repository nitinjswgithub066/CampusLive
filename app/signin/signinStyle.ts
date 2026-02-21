import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    languageContainer: {
        alignItems: 'center',
        paddingTop: 100,
    },
    languageText: {
        color: '#555',
        fontSize: 14,
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 25,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 15,
    },
    brandTitleContainer: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    brandCampus: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
    },
    brandLive: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4AB892',
    },
    inputField: {
        width: '100%',
        height: 55,
        backgroundColor: '#F2F2F2',
        borderRadius: 12,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 2,
        borderColor: '#E0E0E0',
    },
    loginButtonWrapper: {
        width: '100%',
        marginTop: 10,
    },
    gradientButton: {
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#17df99',
        fontSize: 18,
        fontWeight: '600',
    },
    forgotPassword: {
        marginTop: 20,
        fontSize: 16,
        color: '#444',
        fontWeight: '600',
    },
    footerContainer: {
        paddingBottom: 70,
        paddingHorizontal: 25,
    },
    createAccountBtn: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#4AB892',
        justifyContent: 'center',
        alignItems: 'center',
    },
    createAccountText: {
        color: '#4AB892',
        fontSize: 16,
        fontWeight: 'bold',
    },
    passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 55,
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    paddingHorizontal: 15,
  },
  passwordInput: {
    flex: 1, 
    height: '100%',
    fontSize: 16,
    color: '#000',
  },
  eyeIcon: {
    padding: 5,
  },
});

export default styles;