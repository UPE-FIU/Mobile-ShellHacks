import React from "react";
import { Text, View, FlatList } from "react-native";
import Card from "../../components/announcementCard";
import { fetchDummyText } from "../../../utils/api";
// import style from './style'
export default class Annoucements extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetchDummyText().then(data => {
      const events = [];
      data.map(event => {
        if (event.id < 6) {
          events.push(event);
        }
      });
      this.setState({
        data: events
      });
    });
    // this.setState({
    //   data: [
    //     {
    //       id: 0,
    //       title: "Intro to AI with maldon.js",
    //       time: "03:50:19",
    //       location: "PG6-116",
    //       description:
    //         "Lorem ipsum dolor amet heirloom keytar poutine, unicorn knausgaard shaman franzen health goth kickstarter vape 8-bit plaid microdosing. Tousled copper mug hammock, fanny pack mumblecore keytar palo santo waistcoat man bun fashion axe snackwave polaroid listicle.",
    //       tag: "Workshop"
    //     },
    //     {
    //       id: 1,
    //       title: "Soylent Pong",
    //       time: "Happening Now!",
    //       location: "CASE-241",
    //       description:
    //         "Banjo woke knausgaard fixie offal 8-bit 3 wolf moon mustache marfa sustainable iPhone bicycle rights master cleanse tbh lumbersexual. Hammock woke locavore hoodie next level neutra fixie listicle lumbersexual. Intelligentsia cornhole locavore.",
    //       tag: "Activities"
    //     },
    //   ]
    // });
  }
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => <Card data={item} />}
        keyExtractor={(item, index) => item.id.toString()}
        ListFooterComponent={() => (
          <Text style={style.text}>
            Woah, you made it to the bottom!{"\n"}
            If you attended everything, you are the real MVP
          </Text>
        )}
      />
    );
  }
}
