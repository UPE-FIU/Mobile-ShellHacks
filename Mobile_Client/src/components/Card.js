import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Card({ title, description, tag }) {
  return (
    <View style={styles.notificationContainer}>
      <Text style={styles.header}>{title}</Text>
      <Text numberOfLines={4}>{description}</Text>
      <Text style={styles.tag}>{tag}</Text>
      <View style={styles.callToAction}>
        <Icon name="ios-book" size={16}>
          <Text
            onPress={() => {
              console.log("Open a modal or something");
            }}
          >
            {" "}
            Read More
          </Text>
        </Icon>

        <Icon name="ios-close-circle-outline" size={16}>
          <Text
            onPress={() => {
              console.log("Hide this");
            }}
          >
            {" "}
            Close
          </Text>
        </Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 20,
    marginBottom: 30,
    backgroundColor: "#FFF",
    borderRadius: 4,
    borderWidth: 1.8,
    borderColor: "#2C82A9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9
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
    justifyContent: "space-between",
    paddingHorizontal: 2
  },
  spacing: {
    padding: 20,
    backgroundColor: "#FFF"
  }
});
