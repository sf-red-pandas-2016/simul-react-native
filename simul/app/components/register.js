import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class Register extends Component{
  constructor() {
    super();

    this.state = {
      name: "",
      username: "",
      location: "",
      bio: "",
      preferred_contact: "",
      skills: "",
      seeking: "",
    }
  }



  render() {

    return (
      <View style={styles.container}>

        <Text>Register with Simul today</Text>

        <TextInput
          onChangeText={ (val)=> this.setState({name: val}) }
          style={styles.input} placeholder="Name"
        />

        <TextInput
          onChangeText={ (val)=> this.setState({username: val}) }
          style={styles.input} placeholder="Username"
        />

        <TextInput
          onChangeText={ (val)=> this.setState({location: val}) }
          style={styles.input} placeholder="Location"
        />

        <TextInput
          onChangeText={ (val)=> this.setState({bio: val}) }
          style={styles.input} placeholder="Bio"
        />

        <TextInput
          onChangeText={ (val)=> this.setState({preferred_contact: val}) }
          style={styles.input} placeholder="Preferred_contact"
        />

        <TextInput
          onChangeText={ (val)=> this.setState({skills: val}) }
          style={styles.input} placeholder="Skills"
        />


        <TextInput
          onChangeText={ (val)=> this.setState({seeking: val}) }
          style={styles.input} placeholder="Seeking"
        />

        <TouchableHighlight onPress={this.onRegisterPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
          Register
          </Text>
        </TouchableHighlight>

      </View>
    );
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

module.exports = Register;
