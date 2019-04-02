import React, { Component } from 'react';
import { StyleSheet, View, Image, Linking, Modal, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import style from './style'


export default class SponsorCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      description: '',
      link: '',
    };
  }



  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  setDescription = () => {
    this.setState({ description: '\nDescription of Company Here\n' })
  }

  goToURL = (url) => {
    this.setState({ link: Linking.openURL(this.props.url) })
  }


  PressedButton = () => {
    Linking.openURL(this.props.url)
  }
  render() {
    return (
      <View style={this.props.imgStyle} >
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { // For Android
            Alert.alert('Modal has been closed.');
          }}>
          <View style={style.modalBackground}>
            <View style={style.modal}>
              <Text
                style={{ fontSize: 20, alignSelf: 'flex-end', marginRight: 8, color: 'white' }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                X
            </Text>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Company Logo</Text>
              <Text style={{ color: 'white', fontSize: 16 }}>{this.state.description}</Text>

              <TouchableHighlight
                onPress={this.goToURL}>
                <Text style={style.button}>Apply Here!</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={() => {
          // this.PressedButton();
          this.setModalVisible(true);
          this.setDescription();
        }} >
          <Image style={styles.imageStyle} source={this.props.logo} />
        </TouchableOpacity>
      </View >
    );
  }
}


const styles = StyleSheet.create({
  container: {},
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});