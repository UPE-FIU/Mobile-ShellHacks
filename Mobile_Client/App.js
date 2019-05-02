import React from "react";
import { StyleSheet, Platform, AsyncStorage } from "react-native";
import AppNavigator from "./src/navigation";
import axios from 'axios';
import LocalStorage from './src/services/context'

export default class App extends React.Component {
  render() {
    return (
      <LocalStorage.Provider>
        <AppNavigator />
      </LocalStorage.Provider>
    );
  }
}
