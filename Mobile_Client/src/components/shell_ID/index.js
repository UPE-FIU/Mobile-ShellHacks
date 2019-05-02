import React, { Component } from "react";
import { Text, View, Modal, TouchableOpacity, Image } from "react-native";
import style from './style';
import QRgenerator from "../QRgenerator";


export default class ShellID extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: props.show,
            userID: 0,
            score: "0000",
            firstName: 'Jehf',
            lastName: 'Doe',
            avatar: '',
            school: 'Florida State University',
            major: 'Computer Sciences',
        }
    }

    setModalVisible = (visible) => {
        this.props.showId();//updates parent state to not showID
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <Modal
                style={style.container}
                animationType="slide"
                visible={this.state.modalVisible}
                transparent={false}
                onRequestClose={() => { // For Android
                    this.setModalVisible(!this.state.modalVisible);
                }}
            >
                <View style={style.IDcontainer}>
                    {/* <Text style={{ fontSize: 40 }}>ShellHacks</Text> */}
                    <View style={style.center}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 200,
                                height: 200,
                                paddingBottom: '2%'
                            }} source={{ uri: 'https://www.goodfreephotos.com/albums/vector-images/seashell-icon-vector-clipart.png' }} />
                        <Text style={style.userName}>{this.state.firstName + " " + this.state.lastName}</Text>
                    </View>
                    <View style={style.schoolInfo}>
                        <Text style={style.smallText}>{this.state.school}</Text>
                        <Text style={style.smallText}>{this.state.major}</Text>
                    </View>
                    <View style={style.QRcontainer}>
                        <QRgenerator userID={this.props.userID}/>
                    </View>
                </View>

                <TouchableOpacity
                    style={style.closeModalButton}
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Image
                        style={{ height: 80, width: 80, resizeMode: "contain" }}
                        source={{ uri: 'https://i0.wp.com/meritocracy.is/blog/wp-content/uploads/2019/01/grey-down-arrow-icon-png-1.png?resize=385%2C233&ssl=1' }}
                        resizeMode="contain" />
                </TouchableOpacity>
            </Modal>
        );
    }
}