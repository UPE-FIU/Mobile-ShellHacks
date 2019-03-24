import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";

export default class LoginView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput
          autoCorrect={false}
          placeholder="roary@fiu.edu"
          selectionColor="#FFF"
          placeholderTextColor="#FFF"
          clearButtonMode="always"
          style={styles.textInput}
        />
        <Text>Password</Text>
        <TextInput
          autoCorrect={false}
          placeholder="***********"
          selectionColor="#FFF"
          placeholderTextColor="#FFF"
          secureTextEntry={true}
          clearButtonMode="always"
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => console.log("Implement Login")}
        >
          <Text style={styles.whiteText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // backgroundColor: "#aaa",
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textInput: {
    borderRadius: 15,
    width: 230,
    margin: 10,
    padding: 10,
    color: "#FFF",
    backgroundColor: "#666"
  },
  submitButton: {
    padding: 12,
    margin: 10,
    borderRadius: 15,
    width: 230,
    backgroundColor: "#2C82A9",
    color: "#FFF",
    alignItems: "center"
  },
  whiteText: {
    color: "#FFF",
    fontSize: 16
  }
});
