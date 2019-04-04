import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class ButtonView extends React.Component {
  handlePress = () => {
    const { handleViewChange, buttonText } = this.props;
    {
      buttonText == "Sign In"
        ? handleViewChange()
        : console.log("Handle this differently");
    }
  };
  render() {
    const { buttonText } = this.props;
    return (
      <TouchableOpacity style={styles.buttonStyles} onPress={this.handlePress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyles: {
    padding: 15,
    marginTop: 40,
    borderRadius: 15,
    width: 275,
    backgroundColor: "#2C82A9",
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF"
  }
});
