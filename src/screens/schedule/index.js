import React from 'react';
import { View, Text, FlatList } from 'react-native';
import style from './style'
import Card from "../../components/scheduleCard"
import Filter from "../../components/scheduleFilter"
import Emoji from "react-native-emoji";

export default class Schedule extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: [{
        id: 0,
        title: "Intro to AI with maldon.js",
        time: "03:50:19",
        location: "PG6-116",
        description: "Lorem ipsum dolor amet heirloom keytar poutine, unicorn knausgaard shaman franzen health goth kickstarter vape 8-bit plaid microdosing. Tousled copper mug hammock, fanny pack mumblecore keytar palo santo waistcoat man bun fashion axe snackwave polaroid listicle.",
        tag: "Workshop"
      }, {
        id: 1,
        title: "Soylent Pong",
        time: "Happening Now!",
        location: "CASE-241",
        description: "Banjo woke knausgaard fixie offal 8-bit 3 wolf moon mustache marfa sustainable iPhone bicycle rights master cleanse tbh lumbersexual. Hammock woke locavore hoodie next level neutra fixie listicle lumbersexual. Intelligentsia cornhole locavore.",
        tag: "Activities"
      }, {
        id: 2,
        title: "Intro to AI with maldon.js",
        time: "Happening Now!",
        location: "PG6-116",
        description: "Fingerstache schlitz chicharrones banh mi scenester williamsburg stumptown kombucha affogato hella intelligentsia meditation celiac migas. Kinfolk single-origin coffee irony air plant distillery. Enamel pin salvia pitchfork photo booth four loko tousled flexitarian pabst kinfolk vinyl tilde pour-over.",
        tag: "Workshop"
      }, {
        id: 3,
        title: "Soylent Pong",
        time: "03:50:19",
        location: "CASE-241",
        description: "Green juice chia salvia aesthetic. Tousled affogato green juice, hexagon succulents cold-pressed poke beard godard sartorial quinoa adaptogen pug unicorn narwhal. Pabst semiotics franzen bespoke vinyl jean shorts copper mug dreamcatcher pok pok aesthetic.",
        tag: "Activities"
      }]
    })
  }

  render() {
    return (
      <View style={style.container}>
        <View style={{
          backgroundColor: 'transparent',
          width: '100%',

        }}>
          <Filter />
        </View>
        <FlatList
          style={style.events}
          data={this.state.data}
          renderItem={({ item }) => <Card data={item} />}
          keyExtractor={(item, index) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() =>
            <Text style={style.text}>
              Woah, you made it to the bottom!{"\n"}
              If you attended everything, you are the real MVP <Emoji name="tada" style={{ fontSize: 16 }} />
            </Text>
          }
        />
      </View>
    );
  }
}