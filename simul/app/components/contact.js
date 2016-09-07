import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import I18n from 'react-native-i18n'
import UserMessages from './userMessages';

class Contact extends Component{
  constructor(props) {
    super(props);

    this.state = {
      user_Id: this.props.user.id,
      username: this.props.user.name,
      subject: "",
      author: "",
      content: "",
      author_contact: "",
      errors: [],
    }
  }

  async _onPressRegister(){
    try {
      let response = await fetch('https:///simulnos.herokuapp.com/api/users/${this.state.user_Id}/messages', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: {
            user_id: this.state.user_Id,
            subject: this.state.subject,
            author: this.state.author,
            content: this.state.content,
            author_contact: this.state.author_contact,
          }
        })
      });
      let res = await response.text();
    } catch(errors){
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.to}>{this.state.username}</Text>
        <Text style={styles.title}>
          {I18n.t('Leave me a message.')}
        </Text>
        <TextInput
          onChangeText={ (val)=> this.setState({name: val}) }
          style={styles.searchInput}
          placeholder={I18n.t('From')}/>
        <TextInput
          onChangeText={ (val)=> this.setState({name: val}) }
          style={styles.searchInput}
          placeholder={I18n.t('Contact')}/>
        <TextInput
          onChangeText={ (val)=> this.setState({name: val}) }
          style={styles.searchInput}
          placeholder={I18n.t('Subject')}/>
        <TextInput
          onChangeText={ (val)=> this.setState({name: val}) }
          style={styles.message}
          placeholder={I18n.t('Message')}/>
        <TouchableHighlight
          style={styles.button}
          underlayColor="white">
            <Text style={styles.buttonText}>{I18n.t(Send)}</Text>
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
  message: {
    height: 200,
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
    marginBottom: 100,
  },
});




module.exports = Contact;
