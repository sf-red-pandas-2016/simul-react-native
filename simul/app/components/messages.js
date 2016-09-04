import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Messages extends Component{
  render() {
    return (
      <View style={styles.container}>
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
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
});

module.exports = Messages;
