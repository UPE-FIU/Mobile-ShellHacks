import React from "react";
import { StyleSheet, Text, View, LinkingIOS } from "react-native";
import { Platform } from "expo-core";
import LoginView from "./src/components/LoginView";
import LandingView from "./src/components/LandingView";
import AppNavigator from "./src/navigation";

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

  showLandingView = () => {
    this.setState({
      signingIn: false
    });
  };
  render() {
    const { signingIn } = this.state;

    return <AppNavigator />;
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
    marginBottom: 35,
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    fontSize: 34
  }
});
