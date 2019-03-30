import React from 'react';
import {Text, View, ScrollView, SectionList, FlatList } from 'react-native';
import SponsorCard from './cards/index';
import styles from './style';
import {sponsorsData} from './info.json';

export default class SponsorScreen extends React.Component {
   constructor () {
        super();
        this.customData = Object.keys(sponsorsData).map((key) => {
           return {  
              comp: sponsorsData[key].COMPANIES, title: sponsorsData[key].BANNER
           }
        });
        
   } 

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
         <View style={{width: '100%', marginTop: 50, marginBottom: 120}}>
            <View style={styles.Header}>
               <Text style={styles.HeaderTxt}> Organizer</Text>
            </View>
         <View style={{alignItems:'center'}}>
            <FlatList 
               data = {this.customData[0].comp}
               renderItem = {({ item }) => (
               <SponsorCard imgStyle={styles.firstSection} logo={{uri: item.picture}} url={item.url}
               />
                      )}
            />
      <Text style={{fontSize: 18, margin: 15, color: 'white', fontWeight: 'bold'}}> Featuring
      </Text>
           <FlatList 
             data = {this.customData[1].comp}
             renderItem = {({ item }) => (
               <SponsorCard imgStyle={styles.firstSection} logo={{uri: item.picture}} url={item.url}
               /> )}
            />
          </View>
     
      <View style={styles.Header}>
         <Text style={styles.HeaderTxt}> Sponsors </Text>
      </View>
      
          <FlatList 
            style={{flex: 1, alignSelf:'center'}}
            data = {this.customData[2].comp} 
            horizontal={false}
            numColumns={2}
            columnWrapperStyle={{}}
            renderItem = {({item }) => (
              <SponsorCard imgStyle={styles.secSection} logo={{uri:    item.picture}}  url={item.url}
              /> )}
          />
          
      <View style={styles.Header}>
          <Text style={styles.HeaderTxt}> Partners </Text>
      </View>

         <FlatList 
            style={{flex: 1, alignSelf:'center'}}
            data = {this.customData[3].comp} 
            horizontal={false}
            numColumns={3}
            columnWrapperStyle={{}}
            renderItem = {({item }) => (
               <SponsorCard imgStyle={styles.thirdSection} logo={{uri: item.picture}} url={item.url}
               /> )}
         />
        <Text style={{color:'white', fontWeight:'bold',textAlign:'center', marginTop:50, marginBottom: 20}}>
           Whoa! =O you've made it to the bottom. {"\n"}
           If you've attended everything, you are the real MVP
        </Text>
        </View> 
      </ScrollView>
    );
  }
}

