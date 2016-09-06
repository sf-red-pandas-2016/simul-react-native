import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import I18n from 'react-native-i18n'

class Profile extends Component{


_onPressAddStory(){

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Smeagles {I18n.t('profile')}</Text>
        <Text style={styles.body}> {JSON.stringify(this.props.users)}</Text>
        <Text style={styles.body}> Temporary for styling Skeleton </Text>
        <TouchableHighlight onPress={this._onPressAddStory.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
          Add Story
          </Text>
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
  title: {
   marginTop: 25,
   fontSize: 20,
   alignSelf: 'center',
   margin: 40,
  },
  body: {
    flex: 0.1,
  }
});

module.exports = Profile;
