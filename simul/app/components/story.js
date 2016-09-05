import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Profile from './profile.js';
import api from '../Utils/api.js';

class Story extends Component{

  _onPressProfile() {
    api.getUsers().then((res) => {
      this.props.navigator.push({
        title: 'Profile',
        component: Profile,
        passProps: {users: res}
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>

      <TouchableHighlight onPress={this._onPressProfile.bind(this)} style={styles.button}>
        <Text style={styles.buttonText}>
        Ahmeds Profile
        </Text>
      </TouchableHighlight>

        <Text>Day 7</Text>
        <Text style={styles.title}> My neighbor Amira </Text>
        <Text style={styles.content}> Today I met another girl my age named Amira, her family is like mine...</Text>


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
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'flex-start',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
  },
  title: {
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
  content: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
  },

});

module.exports = Story;
