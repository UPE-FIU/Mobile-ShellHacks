import React from 'react';
import { Text, View, Image } from 'react-native';
import style from './style'
import { isRequired } from 'react-native/Libraries/StyleSheet/ColorPropType';
export default class Map extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Image source={require('../../assets/fiuarenaseatingmap.png')} displayMode="contain" style={{ height: '100%', width: '98%' }} />
            </View>
        );
    }
}