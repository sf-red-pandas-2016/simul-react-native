import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

class Contact extends Component{
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.to}>Jim Smith</Text>
        <Text style={styles.title}>
          Leave me a message.
        </Text>
        <TextInput
          style={styles.searchInput}
          placeholder='From'/>
          <TextInput
            style={styles.searchInput}
            placeholder='Subject'/>
          <TextInput
            style={styles.searchInput}
            placeholder='Message'/>
        <TouchableHighlight
          style={styles.button}
          underlayColor="white">
            <Text style={styles.buttonText}>Send</Text>
        </TouchableHighlight>
      </View>
    )
  }
};
var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#27c2dc'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  to: {
    alignSelf: 'flex-end',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 200,
  },
});




module.exports = Contact;
