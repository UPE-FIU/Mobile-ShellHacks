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
            password: '',
            email: '',
            error: '',
            loading: false,
        }
        this.signIn = this.signIn.bind(this);
    }
    //need to implement @Joseph... saving the token to local storage 
    saveToken = () => { }

    //sign user in and navigate to home page 
    signIn = () => {

        //executes only after logging in in
        this.setState({ loading: true })
        this.setState({ isLoggedIn: true })
        this.props.navigation.navigate('App')

        this.setState({ isLoggedIn: false })

    }

    goToLanding = () => {
        this.props.navigation.navigate('Landing')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={styles.lable}>Email</Text>
                    <TextInput
                        autoCorrect={false}
                        placeholder="roary@fiu.edu"
                        selectionColor="#FFF"
                        placeholderTextColor="#b7ae98"
                        clearButtonMode="always"
                        style={styles.textInput}
                        onChangeText={(email) => this.setState({ email })}//adds value to tthe state
                    />
                    <Text style={styles.lable}>Password</Text>
                    <TextInput
                        autoCorrect={false}
                        placeholder="***********"
                        selectionColor="#FFF"
                        placeholderTextColor="#b7ae98"
                        secureTextEntry={true}
                        clearButtonMode="always"
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={this.signIn}
                    >
                        <Text style={styles.whiteText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backLabel} onPress={this.goToLanding}>
                        <Text  >
                            {"← Go Back"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

