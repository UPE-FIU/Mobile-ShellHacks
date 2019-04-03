import React, { Component } from 'react';
import { StyleSheet, View, Image, Linking, Modal, Text, TouchableOpacity } from 'react-native';

import styles from './style'


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
    this.setState({ description: '\nCompany Description\n' })
  }

  goToURL = (url) => {
    this.setState({ link: Linking.openURL(this.props.url) })
  }


  render() {
    return (
      <View style={this.props.imgStyle} >
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => { // For Android
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>

              <TouchableOpacity
                style={styles.closeModalButton}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.closeModalButtonText}>X</Text>
              </TouchableOpacity>

              <Text style={styles.companyLogo}>Company Logo</Text>
              <Text style={styles.companyDescription}>{this.state.description}</Text>

              <View style={styles.buttonFlex}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={this.goToURL}>
                  <Text style={styles.button}>Apply Here!</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={() => {
          this.setModalVisible(true);
          this.setDescription();
        }}>
          <Image style={styles.imageStyle} source={this.props.logo} />
        </TouchableOpacity>
        
      </View>
    );
  }
}
