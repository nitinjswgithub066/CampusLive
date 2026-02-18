import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  backButton: {
    marginTop: 50,
    marginBottom: 20,
    width: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#34A853',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 30,
  },
  pageIndicator: {
    fontSize: 14,
    color: '#34A853',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#E8F5E9',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#34A853',
    width: '100%',
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0F9F4',
    borderWidth: 2,
    borderColor: '#34A853',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarLabel: {
    marginTop: 10,
    color: '#34A853',
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 18,
    height: 58,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  nextButton: {
    marginTop: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  gradient: {
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;