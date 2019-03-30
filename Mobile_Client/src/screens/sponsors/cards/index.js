import React, { Component } from 'react';
import { StyleSheet, View, Image, Linking, TouchableOpacity} from 'react-native';

const SponsorCard = (props) => {
    
    PressedButton = () => {
        Linking.openURL(props.url)
    }

    return (
      <View style={props.imgStyle}>
        <TouchableOpacity onPress={PressedButton} >
            <Image style={styles.imageStyle} source={props.logo} />
        </TouchableOpacity>
      </View>
    );
  }

export default SponsorCard;

const styles = StyleSheet.create({
  container: {},
  imageStyle: {
      height: '100%',
      width: '100%',
      resizeMode : 'contain',
  },
});