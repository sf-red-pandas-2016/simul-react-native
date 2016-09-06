import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import I18n from 'react-native-i18n'

// <Text> {JSON.stringify(this.props.user)}</Text>
class Profile extends Component{
  render() {
    console.log(this.props.user.name)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.user.name + "'s " + I18n.t('profile')}</Text>
        <Text>{I18n.t('username') + ": " + this.props.user.username}</Text>
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
  title: {
   marginTop: 25,
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
});

module.exports = Profile;
