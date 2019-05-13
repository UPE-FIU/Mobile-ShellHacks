import { StyleSheet, Dimensions } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  sectionListContainer: {
    width: '100%',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },

  fullWidthLogo: {
    height: 150,
    width: 350,
    alignSelf: 'center'
  },
  halfWidthLogo: {
    height: 100,
    width: 150,
    margin: 10
  },
  thirdWidthLogo: {
    height: 50,
    width: 100,
    margin: 5
  },
  Header: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#2C82A9',
    borderRadius: 5,
    padding: 15,
    alignSelf: 'center',
    marginTop: '2%'
  },
  HeaderTxt: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  bottomMessage: {
    color: '#665C51',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '5%',

  },
})

module.exports = styles
