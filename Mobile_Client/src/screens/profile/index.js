import React from 'react';
import { Text, View } from 'react-native';
import style from './style'
export default class Profile extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Text>Profile</Text>
            </View>
        );
    }
}