import React from 'react';
import { Text, View, TouchableOpacity, Linking, Image } from 'react-native';
import style from './style'
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerLink: 'https://shellhacks.net/',
            avatar: 'https://artcorgi.com/wp-content/uploads/2014/09/Portrait-of-Christopher-Duel-by-Crespella-via-ArtCorgi.jpg',
            userName: 'Jehf Doe',
            facebook: 'data:image/png;base64,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',
            instagram: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKJ1LKaDum5eOsdZsDykTklXx5SI7H-bhfA-SEUGIrO14n8DVJQ',
            linkedIn: 'data:image/png;base64,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',
            discord: 'https://openstudyroom.org/media/images/Discord3.original.png'
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
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        )
    }
    socialMedia = (source, handlePress) => {
        return (
            <TouchableOpacity onPress={handlePress}>
                <Image style={styles.socialMediaIcon} source={{ uri: source }} resizeMode={'contain'} />
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.userContainer, styles.containerStyles]}>
                    <Image style={[styles.userAvatar, styles.containerStyles]} source={{ uri: this.state.avatar }} resizeMode={'contain'} />
                    <Text style={style.userName}>{this.state.userName}</Text>
                </View>

                <View style={[style.userResources, style.containerStyles]}>
                    {this.Button('Shell ID', this.openLink, styles.buttonStyles)}
                    {this.Button('Discord', this.openLink, styles.buttonStyles)}
                    {this.Button('Travel Reimbursment', this.openLink, styles.buttonStyles)}
                    {this.Button('Log Out', this.goToAuth, styles.buttonStyles)}
                    <View style={styles.halfButtonsContainer}>
                        {this.Button('DevPost', this.openLink, styles.halfButtons)}
                        {this.Button('Shell Radio', this.openLink, styles.halfButtons)}
                    </View>
                </View>

                <View style={[styles.socialMediaContainer, style.containerStyles]}>
                    <Text style={styles.socialMediaTitle}>Stalks us on Social Media</Text>
                    <View style={styles.socialMediaIconContainer}>
                        {this.socialMedia(this.state.instagram, this.openLink)}
                        {this.socialMedia(this.state.instagram, this.openLink)}
                        {this.socialMedia(this.state.instagram, this.openLink)}
                        {this.socialMedia(this.state.instagram, this.openLink)}
                    </View>
                </View>
            </View>
        );
    }
}