import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Profile from './profile.js';
import api from '../Utils/api.js';
import Home from './home.js'
import I18n from 'react-native-i18n'

class Story extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user_Id: this.props.userId,
      name: this.props.name,
      story: this.props.story,
    };
  }

  _navigate() {
    this.props.navigator.push({
      title: I18n.t('home'),
      component: Home
    })
  }
  _onPressProfile() {
    api.getUser(this.state.user_Id).then((res) => {
      this.props.navigator.push({
        title: res.user.username,
        component: Profile,
        passProps: {user: res.user, messages: res.messages, stories: res.stories}
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>

      <TouchableHighlight onPress={this._onPressProfile.bind(this)} style={styles.button}>
        <Text style={styles.buttonText}>
        {this.state.name} {I18n.t('profile')}
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
    backgroundColor: '#27c2dc',
    // alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 4
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
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
