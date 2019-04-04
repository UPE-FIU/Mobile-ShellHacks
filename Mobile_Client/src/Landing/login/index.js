import React from "react";
import {
    Text,
    TextInput,
    View,
    TouchableOpacity
} from "react-native";
import styles from './style'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            Password: '',
            Email: ''
        }
    }
    //need to implement @Joseph... saving the token to local storage 
    saveToken = () => { }
    //need to implement @Joseph
    hashPassword = () => { }
    //need to implement @Joseph
    hashEmail = () => { }
    //need to implement correctly @Joseph
    signIn = () => { this.props.navigation.navigate('App') }

    backToLanding = () => { this.props.navigation.navigate('Landing') }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={styles.lable}>Email</Text>
                    <TextInput
                        autoCorrect={false}
                        placeholder="roary@fiu.edu"
                        selectionColor="#FFF"
                        placeholderTextColor="#FFF"
                        clearButtonMode="always"
                        style={styles.textInput}
                    />
                    <Text style={styles.lable}>Password</Text>
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
                        onPress={this.signIn}
                    >
                        <Text style={styles.whiteText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backLabel} onPress={this.backToLanding}>
                        <Text  >
                            {"← Go Back"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

