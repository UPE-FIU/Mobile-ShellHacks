import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import style from './style'


export default class FilterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: props.showFilter,
      optionSelected: 'O' // Replace with checkmark later
    }
  }

  filterItem = (title) => {
    return (
      <Text style={style.text}>O {title}</Text>
    )
  }
  
  setModalVisible(visible) {
    this.props.showFilterFunction();
    this.setState({ modalVisible: visible });
  }

  setOptionSelected(visible) {
    this.setState({ optionSelected: visible });
  }

  render() {
    return (
      <Modal
        style={style.container}
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={style.containerBackground}>
          <View style={style.modalContainer}>

            <TouchableOpacity
              style={style.closeModalButton}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text style={style.text}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.resetButton}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text style={style.text}>reset</Text>
            </TouchableOpacity>
          </View>

          {/* Sorting options */}
          <View style={style.sortingOptions}>
            <Text style={style.text}>Sort by: {'\n'}</Text>
            {/* (Green lit (Checkmark) Time)  */}
            {/* (Name) */}
            {/* (Tag) */}
            {this.filterItem("Time")}
            {this.filterItem("Name")}
            {this.filterItem("Tag")}
          </View>
        </View>
        {/* for styling purposes */}
        <View style={style.container}>
        </View>
      </Modal>
    );
  }
}