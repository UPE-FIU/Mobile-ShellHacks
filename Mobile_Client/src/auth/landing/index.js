import React from "react";
import { TouchableOpacity, Text, View, Linking } from "react-native";
import styles from './style'

export default class LandingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerLink: 'https://facebook.github.io/react-native/docs/linking.html',
      forgetPasswwordLink: 'https://facebook.github.io/react-native/docs/linking.html'
    }
  }
  goToSignIn = () => { this.props.navigation.navigate('Login') }

  goToForgotPassword = () => {
    Linking.openURL(this.state.forgetPasswwordLink)
  }

  goToRegister = () => {
    Linking.openURL(this.state.registerLink)
  }

  Button = (buttonText, handlePress) => {
    return (
      <TouchableOpacity style={styles.buttonStyles} onPress={handlePress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.Button("Sign In", this.goToSignIn)}
        {this.Button("Forgot Password", this.goToForgotPassword)}
        {this.Button("Register", this.goToRegister)}
      </View>
    );
  }
}