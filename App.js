import React from "react";
import { Notifications } from 'expo';
import AppNavigator from "./src/navigation";
import { UserProvider } from './src/services/context';
import Notification from './src/services/notifications';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      token: ""
    }
  }

  async componentDidMount(){
    await Notification.registerForPushNotificationsAsync();
  }

  render() {
    return (
      <UserProvider value={this.state}>
        <AppNavigator />
      </UserProvider>
    );
  }
}
