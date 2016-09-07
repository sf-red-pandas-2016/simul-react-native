import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import I18n from 'react-native-i18n'
import NewStory from './newStory';
import UserMessages from './userMessages';
import Contact from './contact';
import userStories from './userStories';


// <Text> {JSON.stringify(this.props.user)}</Text>
class Profile extends Component{
  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.user.user_id,
      username: this.props.user.username,
      messages: this.props.messages,
    }
  }

  _onPressAddStory(){
      this.props.navigator.push({
        title: I18n.t('newStory'),
        component: NewStory,
        passProps: {userId: this.state.userId},
      })
    }

  _onPressViewMessages(){
    this.props.navigator.push({
      title: I18n.t('messages'),
      component: UserMessages,
      passProps: { userId: this.state.userId, messages: this.state.messages },
    })
  }

  latestStory() {
  }

  _onPressUserStories() {
    this.props.navigator.push({
      title: this.state.username,
      component: userStories,
      passProps: {userId: this.state.userId},
    })
  }
  _onPressContact(){
    this.props.navigator.push({
      title: I18n.t('contact'),
      component: Contact,
      passProps: { userId: this.state.userId },
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.user.name + "'s " + I18n.t('profile')}</Text>

        <Text style={styles.newestStory}>"My day today was very interesting First I woke up late and I couldn't find my clean clothes and my mom......"</Text>
        <Text style={styles.newestStoryArabic}>كان يوم لي اليوم مثيرة جدا للاهتمام. أولا استيقظت في وقت متأخر، وأنا لا يمكن أن تجد لي ملابس نظيفة وأمي</Text>

        <TouchableHighlight onPress={() => this._onPressAddStory()} style={styles.button}>
          <Text style={styles.buttonText}>
          {I18n.t('addStory')}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this._onPressViewMessages()} style={styles.button}>
          <Text style={styles.buttonText}>
          {I18n.t('messages')}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this._onPressUserStories()}>
          <Text style={styles.body}> {this.props.user.name + "'s " + I18n.t('stories')} </Text>
        </TouchableHighlight>

        <Text> {I18n.t('about')} </Text>
        <TouchableHighlight onPress={() => this._onPressContact()} style={styles.button}>
          <Text style={styles.buttonText}>
            {I18n.t('contact')}
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
   marginTop: 25,
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
  body: {
   flex: 0.1,
   borderColor: 'black',
   borderWidth: 1,
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
  newestStory: {
  backgroundColor: 'lightgrey',
  },
  newestStoryArabic: {
    backgroundColor: 'lightgrey',
  },

  });

module.exports = Profile;
