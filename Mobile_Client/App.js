import React from "react";
import AppNavigator from "./src/navigation";
import { UserProvider } from './src/services/context';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      token: ""
    }
  }
  render() {
    return (
      <UserProvider value={this.state}>
        <AppNavigator />
      </UserProvider>
    );
  }
}
