import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Card from "./Card";
export default function Announcement() {
  return (
    <ScrollView style={styles.container}>
      <Card
        title="Welcome to FIU"
        description="Lorem ipsum dolor amet heirloom keytar poutine, unicorn knausgaard shaman franzen health goth kickstarter vape 8-bit plaid microdosing. Tousled copper mug hammock, fanny pack mumblecore keytar palo santo waistcoat man bun fashion axe snackwave polaroid listicle."
        tag="Data Science"
      />
      <Card
        title="Intro to Cybersecurity with Deloitte"
        description="Banjo woke knausgaard fixie offal 8-bit 3 wolf moon mustache marfa sustainable iPhone bicycle rights master cleanse tbh lumbersexual. Hammock woke locavore hoodie next level neutra fixie listicle lumbersexual. Intelligentsia cornhole locavore."
        tag="Cybersecurity"
      />
      <Card
        title="Magic Leap Info Session"
        description="Fingerstache schlitz chicharrones banh mi scenester williamsburg stumptown kombucha affogato hella intelligentsia meditation celiac migas. Kinfolk single-origin coffee irony air plant distillery. Enamel pin salvia pitchfork photo booth four loko tousled flexitarian pabst kinfolk vinyl tilde pour-over."
        tag="Virtual Reality"
      />
      <Card
        title="Typescript Fundamentals"
        description="Green juice chia salvia aesthetic. Tousled affogato green juice, hexagon succulents cold-pressed poke beard godard sartorial quinoa adaptogen pug unicorn narwhal. Pabst semiotics franzen bespoke vinyl jean shorts copper mug dreamcatcher pok pok aesthetic."
        tag="Web Development"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 25
  }
});
