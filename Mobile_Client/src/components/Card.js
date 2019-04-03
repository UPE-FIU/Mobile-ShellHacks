import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default function Card({ title, description, tag }) {
  return (
    <View style={styles.notificationContainer}>
      <Text style={styles.header}>{title}</Text>
      <Text numberOfLines={4}>{description}</Text>
      <Text style={styles.tag}>{tag}</Text>
      <View style={styles.callToAction}>
        <Text>Read More</Text>
        <Text>Hide</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 20,
    marginTop: 40,
    backgroundColor: "#FFF"
  },
  header: {
    fontSize: 24,
    textAlign: "left",
    marginVertical: 20
  },
  tag: {
    fontSize: 12,
    marginTop: 15,
    fontWeight: "bold"
  },
  callToAction: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
