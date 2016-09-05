import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Story extends Component{
  render() {
    return (
      <View style={styles.container}>
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
  }
});

module.exports = Story;
