import React from 'react';
import { Text, View, TouchableOpacity, Linking, Image } from 'react-native';
import style from './style'
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerLink: 'https://facebook.github.io/react-native/docs/linking.html',
            imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKJ1LKaDum5eOsdZsDykTklXx5SI7H-bhfA-SEUGIrO14n8DVJQ',
            avatar: 'https://artcorgi.com/wp-content/uploads/2014/09/Portrait-of-Christopher-Duel-by-Crespella-via-ArtCorgi.jpg',
            userName: 'Jehf Doe'
        }
    }

    openLink = () => {
        Linking.openURL(this.state.registerLink)
    }
    goToAuth = () => {
        this.props.navigation.navigate('Landing')
    }
    showId = () => {
        Linking.openURL(this.state.registerLink)
    }

    Button = (buttonText, handlePress, buttonStyles) => {
        return (
            <TouchableOpacity style={buttonStyles} onPress={handlePress}>
                <Text style={style.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        )
    }
    Image = (source, handlePress) => {
        return (
            <TouchableOpacity onPress={handlePress}>
                <Image style={style.imgStyles} source={{ uri: source }} />
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={style.container}>
                <View style={style.userInfo}>
                    <Image style={style.avatar} source={{ uri: this.state.avatar }} />
                    <Text style={style.userName}>{this.state.userName}</Text>
                </View>

                <View style={style.userResources}>
                    {this.Button('Shell ID', this.openLink, style.buttonStyles)}
                    {this.Button('Discord', this.openLink, style.buttonStyles)}
                    {this.Button('Travel Reimbursment', this.openLink, style.buttonStyles)}
                    {this.Button('Log Out', this.goToAuth, style.buttonStyles)}
                </View>

                <View style={style.bottom}>
                    <View style={style.centerStuff}>
                        {this.Button('DevPost', this.openLink, style.shortButtonStyles)}
                        {this.Button('Shell Radio', this.openLink, style.shortButtonStyles)}
                    </View>
                    <Text style={style.bottomTitle}>Stalks us on Social Media</Text>
                    <View style={style.socialMedia}>
                        {this.Image(this.state.imageLink, this.openLink)}
                        {this.Image(this.state.imageLink, this.openLink)}
                        {this.Image(this.state.imageLink, this.openLink)}
                        {this.Image(this.state.imageLink, this.openLink)}
                    </View>
                </View>
            </View>
        );
    }
}