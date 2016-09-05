import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import Home from './home'

class Nav extends Component{

  _onPressHome() {
    this.props.navigator.push({
      title: 'Home',
      component: Home
    })
  }

  render() {
    return (
      <View style={styles.rootContainer}>
       <View style ={styles.topContainer}>
        <TouchableHighlight onPress={ () => this._onPressHome()}>
         <Text style={styles.simulText}>
          SIMUL
         </Text>
        </TouchableHighlight>
       </View>

       <View style ={styles.displayContainer}>
         <Text style={styles.pageContent}>
        "This is the display area for each page's content."
         </Text>

       </View>
     </View>
   );
 }
};

var styles = StyleSheet.create({
 rootContainer: {
       flex: 1,
   },
 topContainer: {
       flex: 1.25,
       backgroundColor: '#3AAED8',
       justifyContent: 'center',
   },
 displayContainer: {
       flex: 8.75,
       backgroundColor: '#FFFFFE',
   },
 simulText: {
   fontSize: 40,
   textAlign: 'center',
   color: '#FFFFFE',
   margin: 10,
 },
 pageContent: {
   textAlign: 'center',
   color: '#333333',
   fontSize: 19,
   margin: 10,
 },
});


module.exports = Nav;
