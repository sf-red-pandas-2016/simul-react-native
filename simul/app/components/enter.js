import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

var Home = require('./home')

class Enter extends Component{

  constructor(props) {
    super(props);
  }

  _navigate() {
    this.props.navigator.push({
      title: 'Home'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/simul_icon1.png')} style={styles.image}/>
        <Text style={styles.title}>SIMUL</Text>
        <TouchableHighlight onPress={ () => this._navigate()}>
          <Text>Enter</Text>
        </TouchableHighlight>
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
