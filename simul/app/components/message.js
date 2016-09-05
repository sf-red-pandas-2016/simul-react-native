import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Message extends Component{
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <Text style={styles.to}>Jim Smith</Text>
        <Text style={styles.from}>from: Tom Smith</Text>
        <Text style={styles.from}>date: 08/04/2016</Text>
        <Text style={styles.title}>Europe</Text>
        <Text style={styles.content}>Europe is close to limit on accepting refugees, EU President Donald Tusk said Sunday, as he urged the international community to do more to step up resettlement of those seeking refuge.</Text>
=======
        <Text>Message</Text>
>>>>>>> badd7c5cad51a1bd08a6506271baab7bb799b44f
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
