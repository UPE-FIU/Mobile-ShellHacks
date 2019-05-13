import React, { Component } from "react";
import { View, } from "react-native";
import QRCode from 'react-native-qrcode';
import style from './style';


export default class QRgenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: props.userID,
        }
    }
    render() {
        return (
            <View style={style.container}>
                <QRCode
                    value={this.state.userID}
                    size={230}
                    bgColor='#FE81B4'
                    fgColor='white' />
            </View>
        );
    }
}