import React from "react";
import { StyleSheet, Text, View, LinkingIOS } from "react-native";
import { Platform } from "expo-core";
import LoginView from "./src/components/LoginView";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>SHELLHACKS</Text>
        <LoginView />
        <Text style={styles.helpLinks}>Forgot Password | Register</Text>
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
