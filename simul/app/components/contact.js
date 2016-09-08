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
import Message from './message';

class Contact extends Component{
  constructor(props) {
    super(props);

    this.state = {
      user_Id: this.props.userId,
      name: this.props.name,
      subject: "",
      author: "",
      content: "",
      author_contact: "",
      errors: [],
    }
  }

  async _onPressSend(){
    console.log(this.state.user_Id)
    console.log(this.state.subject)
    console.log(this.state.author)
    console.log(this.state.content)
    console.log(this.state.author_contact)
      let response = await fetch(`https://simulnos.herokuapp.com/api/users/${this.state.user_Id}/messages`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: this.state.user_Id,
            subject: this.state.subject,
            author: this.state.author,
            content: this.state.content,
            author_contact: this.state.author_contact
        })
      })
      let res = await response.json();
      console.log(res.message.id);
        this.props.navigator.push({
          title: I18n.t('message'),
          component: Message,
          passProps: { userId: this.state.user_Id, message: res.message, name: this.state.name},
        })
  }

  render() {
    console.log(this.state.name);
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.to}>{this.state.name}</Text>
        <Text style={styles.title}>
          {I18n.t('contact')}
        </Text>
        <TextInput
          onChangeText={ (val)=> this.setState({author: val}) }
          style={styles.searchInput}
          placeholder={I18n.t('from')}/>
        <TextInput
          onChangeText={ (val)=> this.setState({author_contact: val}) }
          style={styles.searchInput}
          placeholder={I18n.t('contactInformation')}/>
        <TextInput
          onChangeText={ (val)=> this.setState({subject: val}) }
          style={styles.searchInput}
          placeholder={I18n.t('subject')}/>
        <TextInput
          onChangeText={ (val)=> this.setState({content: val}) }
          style={styles.message}
          placeholder={I18n.t('message')}/>
        <TouchableHighlight
          onPress={() => this._onPressSend()}
          style={styles.button}
          underlayColor="white">
            <Text style={styles.buttonText}>{I18n.t('send')}</Text>
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
    marginBottom: 10,
  },
});




module.exports = Contact;
