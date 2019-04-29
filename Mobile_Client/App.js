import React from "react";
import { StyleSheet, Platform, AsyncStorage } from "react-native";
import AppNavigator from "./src/navigation";
import axios from 'axios';

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
