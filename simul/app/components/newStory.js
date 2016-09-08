import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import UserStories from './userStories';
import Story from './story';

class NewStory extends Component{

  constructor(props) {
    super(props);

    this.state = {
      user_Id: this.props.userId,
      name: this.props.name,
      title: "",
      content: "",
      errors: [],
    }
  }

  async _onPressSend(){
      let response = await fetch(`https://simulnos.herokuapp.com/api/users/${this.state.user_Id}/stories`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: this.state.user_Id,
            title: this.state.title,
            content: this.state.content,
        })
      })
      let res = await response.json();
        this.props.navigator.push({
          title: I18n.t('story'),
          component: Story,
          passProps: { userId: this.state.user_Id, story: res.story, name: this.state.name},
        })
  }


  render() {
    return (
      <View style={styles.mainContainer}>
      <Text style={styles.to}>{this.state.name}</Text>
        <Text style={styles.title}>
          New story.
        </Text>
        <TextInput
          style={styles.searchInput}
          Test/>
        <TouchableHighlight
          style={styles.button}
          underlayColor="white">
            <Text style={styles.buttonText}>Post</Text>
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




module.exports = NewStory;
