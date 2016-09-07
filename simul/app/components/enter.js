import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import Home from './home.js'
import General from '../styles/general.js'
import I18n from 'react-native-i18n'

class Enter extends Component{

  constructor(props) {
    super(props);
  }

  _navigate() {
    this.props.navigator.push({
      title: I18n.t('home'),
      component: Home
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/simul_icon1.png')} style={styles.image}/>
        <Text style={styles.title}>SIMUL</Text>
        <TouchableHighlight onPress={ () => this._navigate()}>
          <Text style={styles.enter}>{I18n.t('enter')}</Text>
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
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
   fontSize: 40,
   alignSelf: 'center',
   margin: 30,
   backgroundColor: 'white',
   padding: 10,
   borderRadius: 6,
   fontFamily: 'Avenir-Roman'
  },
  enter: {
    fontSize: 25,
    width: 300,
    textAlign: 'center',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#27c2dc',
    fontFamily: 'Avenir-Roman'

  }
});

module.exports = Enter;
