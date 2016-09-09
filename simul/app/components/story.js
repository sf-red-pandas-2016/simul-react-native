import React, { Component } from 'react';
import I18n from 'react-native-i18n'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';

import Profile from './profile.js';
import api from '../Utils/api.js';
import Home from './home.js'

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
      <ScrollView style={styles.superContainer}>
        <View style={styles.container}>

          <TouchableHighlight onPress={this._onPressProfile.bind(this)} style={styles.button}>
            <Text style={styles.buttonText}>
            {this.state.user.name + "'s " + I18n.t('profile')}
            </Text>
          </TouchableHighlight>

          <Text>Created at:</Text>
          <Text>{this.props.story.created_at}</Text>

          <Text style={styles.title}>{this.props.story.title.toUpperCase()}</Text>
          <Image source={{uri: photo}} style={{width: 400, height: 225}}/>
          <Text style={styles.content}>{this.props.story.content}</Text>
        </View>
      </ScrollView>
    )
  }
};

var styles = StyleSheet.create({
  superContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  button: {
    height: 50,
    backgroundColor: '#27c2dc',
    // alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 100,
    justifyContent: 'center',
    borderRadius: 4
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },

  title: {
   fontFamily: 'Avenir-Roman',
   color: '#6d6f6f',
   fontSize: 28,
   alignSelf: 'center',
   margin: 40,
  },
  content: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Farah',
    marginTop: 10,
    marginBottom: 5,
    color: '#4a4c4d',
    textAlign: 'center',
    padding: 5,
    paddingTop: 15,
  },

});

module.exports = Story;
