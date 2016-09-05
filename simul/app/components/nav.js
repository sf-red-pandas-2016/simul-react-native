import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Nav extends Component{
  render() {
    return (
      <View style={styles.rootContainer}>
       <View style ={styles.topContainer}>
         <Text style={styles.simulText}>
         SIMUL
         </Text>
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
