import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

class UserMessages  extends Component{
  render() {
    return (
      <ScrollView style={styles.superContainer}>
        <View style={styles.container}>
          <Text style={styles.to}>Jim Smith</Text>
          <Text style={styles.from}>from: Tom Smith</Text>
          <Text style={styles.from}>date: 08/04/2016</Text>
          <Text style={styles.title}>Europe</Text>
          <Text style={styles.from}>from: Tom Smith</Text>
          <Text style={styles.from}>date: 08/03/2016</Text>
          <Text style={styles.title}>Another chance</Text>
          <Text style={styles.from}>from: Tom Smith</Text>
          <Text style={styles.from}>date: 08/02/2016</Text>
          <Text style={styles.title}>We leave</Text>
          <Text style={styles.from}>from: Tom Smith</Text>
          <Text style={styles.from}>date: 08/01/2016</Text>
          <Text style={styles.title}>No more food</Text>
        </View>
      </ScrollView>
    )
  }
};

var styles = StyleSheet.create({
  superContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27c2dc'
  },
  title: {
   fontSize: 40,
   alignSelf: 'center',
   backgroundColor: '#27c2dc',
   marginBottom: 20,
  },
  from: {
    alignSelf: 'flex-start',
    fontSize: 21,
    fontStyle: 'italic',
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

module.exports = UserMessages;
