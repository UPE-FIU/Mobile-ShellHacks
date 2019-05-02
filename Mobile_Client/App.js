import React from "react";
import AppNavigator from "./src/navigation";
import LocalStorage from './src/services/context';

export default class App extends React.Component {
  render() {
    return (
      <LocalStorage.Provider>
        <AppNavigator />
      </LocalStorage.Provider>
    );
  }
}
