import { StyleSheet } from 'react-native';

export default style = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    backgroundColor: 'black',
    opacity: .6
  },

  containerBackground: {
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    fontSize: 25,
    color: 'black'
  },
  
  modalContainer: {
    alignSelf: 'center',
    width: '85%',
    flexDirection: 'row',
    marginTop: '8%',
    justifyContent: 'space-between',
  },

  modal: {
    padding: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
  },

  closeModalButton: {
    alignSelf: 'flex-start',
  },

  resetButton: {
    // fontSize: 25,
    // color: 'black'
  },

  text: {
    fontSize: 25,
    color: 'black'
  },

  sortingOptions: {
    marginHorizontal: 30,
    marginVertical: 8
  }

});