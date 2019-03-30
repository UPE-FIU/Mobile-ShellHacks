import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: 'purple',
    },

    firstSection: {
      height: 150,
      width: 350,
    },
    secSection: {
      height: 100,
      width: 150,
      margin:10
    },
    thirdSection: {
      height: 50,
      width: 100,
      margin: 5
    },
    Header:{
     marginRight: '10%',
     marginLeft: '10%',
     height: 60,
     backgroundColor: '#3875d8',
     borderRadius: 30,
     justifyContent: 'center',
    },
    HeaderTxt: {
     textAlign: 'center',
     fontSize: 18,
     color: 'white',
     fontWeight: 'bold',
    },
  })

  module.exports = styles
