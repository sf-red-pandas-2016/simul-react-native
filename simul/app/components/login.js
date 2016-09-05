import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class Login extends Component{
  constructor(){
    super();

    this.state = {
      name: "",
      username: "",
      location: "",
      bio: "",
      preferred_contact: "",
      skills: "",
      seeking: "",
      errors: [],
    }
  }


  render() {
    return (
      <View style={styles.container}>

        <Text>
        Login
        </Text>

        <TextInput
          onChangeText={ (text)=> this.setState({username: text}) }
          style={styles.input} placeholder='Username'>
        </TextInput>

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

module.exports = Login;
