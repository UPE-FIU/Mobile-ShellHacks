import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import style from './style'

export default function Card({ data }) {
    let { title, description, tag } = data;
    return (
        <View style={style.notificationContainer}>
            <Text style={style.header}>{title}</Text>
            <Text numberOfLines={4}>{description}</Text>
            <Text style={style.tag}>{tag}</Text>
            <View style={style.callToAction}>
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

