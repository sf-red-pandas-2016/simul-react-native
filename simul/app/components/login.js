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
      password_digest: "",
      location: "",
      bio: "",
      preferred_contact: "",
      skills: "",
      seeking: "",
      errors: [],
    }
  }

  async onLoginPressed(){
    

  }


  render() {
    return (
      <View style={styles.container}>

        <Text>
        Login
        </Text>

        <TextInput
          onChangeText={ (val)=> this.setState({username: val}) }
          style={styles.input} placeholder='Username'
        />

        <TextInput
          onChangeText={ (val)=> this.setState({password_digest: val}) }
          style={styles.input} placeholder="Password"
        />

        <TouchableHighlight onPress={this.onRegisterPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
          Register
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
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
});

module.exports = Login;
