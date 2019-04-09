import React from "react";
import { StyleSheet, Platform, AsyncStorage } from "react-native";
import AppNavigator from "./src/navigation";

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
