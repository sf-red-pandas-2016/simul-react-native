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


// <Text> {JSON.stringify(this.props.user)}</Text>
class Profile extends Component{
  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.user.user_id,
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

  featuredStory() {

  }

  _onPressContact(){
    this.props.navigator.push({
      title: I18n.t('contact'),
      component: Contact,
      passProps: { userId: this.state.userId },
    })
  }

  render() {
    console.log(this.props.user.name)
    return (
      <View style={styles.container}>
        <Text>{I18n.t('username') + ": " + this.props.user.username}</Text>
        <Text style={styles.title}>{this.props.user.name + "'s " + I18n.t('profile')}</Text>

        <Text style={styles.featuredStory}>"My day today was very interesting First I woke up late and I couldn't find my clean clothes and my mom......"</Text>
        <Text style={styles.featuredStoryArabic}>كان يوم لي اليوم مثيرة جدا للاهتمام. أولا استيقظت في وقت متأخر، وأنا لا يمكن أن تجد لي ملابس نظيفة وأمي</Text>

        <TouchableHighlight onPress={() => this._onPressAddStory())} style={styles.button}>
          <Text style={styles.buttonText}>
          Add Story
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this._onPressViewMessages())} style={styles.button}>
          <Text style={styles.buttonText}>
          View Messages
          </Text>
        </TouchableHighlight>

        <Text style={styles.body}> This will be a list of user stories </Text>

        <Text> Personal Info </Text>
        <TouchableHighlight onPress={() => this._onPressContact())} style={styles.button}>
          <Text style={styles.buttonText}>
          Contact
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
  featuredStory: {
  backgroundColor: 'lightgrey',
  },
  featuredStoryArabic: {
    backgroundColor: 'lightgrey',
  },

  });

module.exports = Profile;
