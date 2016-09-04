import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class Enter extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/simul_icon1.png')} style={styles.image}/>
        <Text style={styles.title}>SIMUL</Text>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
});

module.exports = Enter;
