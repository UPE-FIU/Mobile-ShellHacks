import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style'
import Emoji from 'react-native-emoji';
import Icon from "react-native-vector-icons/Ionicons";
import FilterModal from '../filterModal';


export default class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      generalBackground: { backgroundColor: 'red' },
      favoritesBackground: { backgroundColor: 'gray' },
      showFilter: false,
    }
  }

  showFilterFunction = () => {
    this.setState({ showFilter: !this.state.showFilter });
  }
  changeGeneralColor = () => {
    this.setState({ generalBackground: { backgroundColor: 'red' } });
    this.setState({ favoritesBackground: { backgroundColor: 'gray' } });
  }
  changeFavoritesColor = () => {
    this.setState({ generalBackground: { backgroundColor: 'gray' } });
    this.setState({ favoritesBackground: { backgroundColor: 'red' } });
  }

  render() {
    const displayFilter = this.state.showFilter ? <FilterModal showFilterFunction={this.showFilterFunction.bind(this)} showFilter={this.state.showFilter} /> : <View />
    return (
      <View style={style.container}>
        {displayFilter}
        <View style={style.buttonsContainer}>
          <TouchableOpacity style={[style.general, this.state.generalBackground]}
            onPress={this.changeGeneralColor}>
            <Text>General</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[style.favorites, this.state.favoritesBackground]}
            onPress={this.changeFavoritesColor}>
            <Text>Favorites</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={style.filter}
          onPress={() => { this.setState({ showFilter: true }) }}>
          <Icon name="ios-funnel" size={22} style={{
            backgroundColor: 'transparent',
          }} />
        </TouchableOpacity>
      </View>
    );
  }
}