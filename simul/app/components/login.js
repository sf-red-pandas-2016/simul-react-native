import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import I18n from 'react-native-i18n'

I18n.fallbacks = true;

I18n.translations = {
  en: {
    login: 'Login',
    username: 'Username',
    password: 'Password'
  },
  ar: {
    login: 'دخول',
    username: 'اسم المستخدم',
    password: 'كلمه السر'
  }
}


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

  async _onPressLogin() {

    try {
      let response = await fetch('http:///simulnos.herokuapp.com/api/users', {
                      method: 'POST',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        session:{
                          username: this.state.username,
                          password_digest: this.state.password_digest,
                        }
                      })
      });

      let res = await response.text();
      console.log("res is: " + res)
    } catch(errors){

    }

  }


  render() {
    return (
      <View style={styles.container}>

        <Text>
        {I18n.t('login')}
        </Text>

        <TextInput
          onChangeText={ (val)=> this.setState({username: val}) }
          style={styles.input} placeholder={I18n.t('username')}
        />

        <TextInput
          onChangeText={ (val)=> this.setState({password_digest: val}) }
          style={styles.input} placeholder={I18n.t('password')}
        />

        <TouchableHighlight onPress={this._onPressLogin.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
          {I18n.t('login')}
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
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
  },
});

module.exports = Login;
