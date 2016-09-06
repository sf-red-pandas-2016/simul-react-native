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
    api.getUser(2).then((res) => {
      this.props.navigator.push({
        title: 'Profile',
        component: Profile,
        passProps: {user: res}
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

      <Text>Created at:</Text>
      <Text>{this.props.story.created_at}</Text>
      <Text style={styles.title}>{this.props.story.title}</Text>
      <Text style={styles.content}>{this.props.story.content}</Text>
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
