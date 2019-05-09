import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modal: {
    alignItems: 'center',
    padding: 15,
    borderWidth: 0.5,
    borderRadius: 12,
    width: '65%',
    height: '60%',
    backgroundColor: '#9E8D7D',
  },

  buttonFlex: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5FC6CA',
    borderRadius: 12,
  },

  button: {
    color: 'white',
    padding: 6,
    fontSize: 16,
    marginBottom: '2%',
  },

  closeModalButton: {
    alignSelf: 'flex-end',
  },

  closeModalButtonText: {
    fontSize: 25,
    color: 'white',
  },

  companyLogo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  companyDescription: {
    color: 'white',
    fontSize: 16,
  },

  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});