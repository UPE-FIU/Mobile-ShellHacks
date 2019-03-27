import React from "react";
import { StyleSheet, Text, View, LinkingIOS } from "react-native";
import { Platform } from "expo-core";
import LoginView from "./src/components/LoginView";
import LandingView from "./src/components/LandingView";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signingIn: false
    };
  }

  showSignUpView = () => {
    this.setState({
      signingIn: true
    });
  };
  render() {
    const { signingIn } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>SHELLHACKS</Text>
        {signingIn ? (
          <LoginView />
        ) : (
          <LandingView showSignUpView={this.showSignUpView} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBECCC",
    alignItems: "center",
    justifyContent: "center"
  },
  logoText: {
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    fontSize: 34,
    marginBottom: 20
  },
  helpLinks: {
    marginTop: 50,
    fontSize: 16
  }
});
