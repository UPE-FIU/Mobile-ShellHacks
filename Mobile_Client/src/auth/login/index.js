import React from "react";
import axios from 'axios';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity
} from "react-native";
import styles from './style'
import Loading from '../../components/loading';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: false,
            emptyFields: false,
            loading: false,
            password: '',
            email: '',
        }
        this.signIn = this.signIn.bind(this);
    }

    signIn = async () => {
        this.setState({ loading: true })
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        if (user === null) {
            throw this.setState({ emptyFields: true })
        }
        await axios.post(`https://reqres.in/api/users`, { user })//temp endpoints 
            .then(res => {
                let { user } = res.data;
                console.log("_____________________RESPONSE__________________________");
                console.log(user);
                console.log(res.data);
                this.setState({ loading: false })
                res.status == 201 ? this.props.navigation.navigate('App') : ""
            })
            .catch((error) => {
                console.log(error)
            })
    }

    goToLanding = () => {
        this.props.navigation.navigate('Landing')
    }

    render() {
        if (this.state.loading) return (<Loading />)
        else return (
            <View style={styles.container} >
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

