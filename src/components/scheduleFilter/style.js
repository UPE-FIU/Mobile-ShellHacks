import { StyleSheet } from 'react-native';

export default style = StyleSheet.create({
  container: {
    alignSelf:'center',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  buttonsContainer: {
    flexDirection: 'row',
    width: '85%'
  },
  general: {
    width: '50%',
    padding: 10,
  },
  favorites: {
    width: '50%',
    padding: 10,
  },
  filter: {
    width: '10%',
    padding: 10,
    backgroundColor: 'transparent',
  }

});