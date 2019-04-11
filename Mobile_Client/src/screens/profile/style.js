import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  },
  containerStyles: {
    // backgroundColor: '#888',
    // borderColor: "#000",
    // borderWidth: 1,
    width: '80%'
  },
  userContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 2
  },
  userAvatar: {
    width: '50%',
    height: '80%',
  },
  userName: {
    fontSize: 20,
    fontWeight: '900',
    color: '#675C50',
  },
  userResouces: {
    flex: 3
  },
  buttonStyles: {
    padding: 15,
    marginTop: '5%',
    borderRadius: 25,
    width: '100%',
    backgroundColor: "#2C82A9",
    alignItems: "center"
  },
  halfButtonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfButtons: {
    width: '40%',
    padding: 15,
    marginBottom: '5%',
    marginTop: '5%',
    borderRadius: 25,
    backgroundColor: "#2C82A9",
    alignItems: "center"

  },
  buttonText: {
    color: "#F6F6F6",
    fontWeight: '900'
  },
  socialMediaContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: "center"
  },
  socialMediaTitle: {
    alignSelf: 'center',
    fontWeight: '900',
    color: '#675C50',
  },
  socialMediaIconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  socialMediaIcon: {
    width: 70,
    height: 70
  }
});