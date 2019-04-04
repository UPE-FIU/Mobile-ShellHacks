import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import styles from './style'
export default class Loading extends React.Component {

    //here we are suppose to check is user is already loggedin
    userIsLoggedIn = () => {
        isLoggedIn ? this.props.navigation.navigate('App') : this.props.navigation.navigate('Landing')
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" color="#FE81B4" />
            </View>
        )
    }
}