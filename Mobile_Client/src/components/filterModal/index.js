import React from 'react';
import { View, Text, TouchableHighlight, Modal } from 'react-native';
import style from './style'


export default class FilterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: props.showFilter,
    }
  }
  setModalVisible(visible) {
    this.props.showFilterFunction();
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}