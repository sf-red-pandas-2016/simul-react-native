import React, { Component } from 'react';
import I18n from 'react-native-i18n'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

import Profile from './profile.js';
import api from '../Utils/api.js';

class Story extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: '?',
    };
  }

  componentDidMount() {
    this.fetchData().done()
  }

  async fetchData() {
    var url = "https://simulnos.herokuapp.com/api/users/" + this.props.story.user_id
    const response = await fetch(url)
    const json = await response.json()
    const user = json.user
    this.setState({user: user})
    }

  _onPressProfile() {
    api.getUser(this.props.story.user_id).then((res) => {
      this.props.navigator.push({
        title: res.user.username,
        component: Profile,
        passProps: {user: res.user, messages: res.messages, stories: res.stories}
      })
    })
  }

  render() {
    if (this.props.story.photo !== null){
      var photo = this.props.story.photo
    }

    return (
      <View style={styles.container}>


      <Text>Created at:</Text>
      <Text>{this.props.story.created_at}</Text>

      <Text style={styles.title}>{this.props.story.title}</Text>
      <Image source={{uri: photo}} style={{width: 400, height: 225}}/>
      <Text style={styles.content}>{this.props.story.content}</Text>

      <TouchableHighlight onPress={this._onPressProfile.bind(this)} style={styles.button}>
      <Text style={styles.buttonText}>
      {this.state.user.name + "'s " + I18n.t('profile')}
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
  button: {
    height: 50,
    backgroundColor: '#27c2dc',
    // alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 4
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  title: {
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
  content: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
  },

});

module.exports = Story;
