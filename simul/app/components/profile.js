import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import I18n from 'react-native-i18n'

class Profile extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Smeagles {I18n.t('profile')}</Text>
        <Text> {JSON.stringify(this.props.users)}</Text>
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
