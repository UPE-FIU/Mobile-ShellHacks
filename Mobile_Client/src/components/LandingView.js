import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonView from "./ButtonView";

export default class LandingView extends React.Component {
  handleViewChange = () => {
    const { showSignUpView } = this.props;
    showSignUpView();
  };

  render() {
    return (
      <View>
        <ButtonView
          buttonText="Sign In"
          handleViewChange={this.handleViewChange}
        />
        <ButtonView buttonText="Forgot Password" />
        <ButtonView buttonText="Register" />
      </View>
    );
  }
}
