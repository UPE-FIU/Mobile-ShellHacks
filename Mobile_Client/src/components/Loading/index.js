import React from "./node_modules/react";
import { View, Text, ActivityIndicator } from "react-native";
import style from "./style";
export default class Loading extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" color="#FE81B4" />
      </View>
    );
  }
}
