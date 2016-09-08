import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Home from './home.js'
import I18n from 'react-native-i18n'

class Message extends Component{

  constructor(props) {
    super(props);

    this.state = {
      user_Id: this.props.userId,
      name: this.props.name,
      message: this.props.message,
    }
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
        <Text>{I18n.t('message')}</Text>
        <Text style={styles.to}>{this.state.name}</Text>
        <Text style={styles.from}>{I18n.t('from')} {this.state.message.author}</Text>
        <Text>{I18n.t('senderContact')}</Text>
        <Text>{this.state.message.author_contact}</Text>
        <Text style={styles.from}>{I18n.t('date')} {this.state.message.created_at}</Text>
        <Text style={styles.title}>{I18n.t('subject')} {this.state.message.subject}</Text>
        <Text>{I18n.t('content')}</Text>
        <Text style={styles.content}>{this.state.message.content}</Text>
      </View>
    )
  }
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27c2dc'
  },
  title: {
   fontSize: 40,
   alignSelf: 'center',
   margin: 40,
   backgroundColor: '#27c2dc',
  },
  from: {
    alignSelf: 'flex-start',
    fontSize: 21,
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 5,
  },
  to: {
    alignSelf: 'flex-end',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 60,
  },
  content: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
  }
});


module.exports = Message;
