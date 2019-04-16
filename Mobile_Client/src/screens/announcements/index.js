import React from "react";
import { Text, View } from "react-native";
import AnnoucementView from "../../components/Announcement";
// import style from './style'
export default class Annoucements extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <AnnoucementView />
      </View>
    );
  }
}
