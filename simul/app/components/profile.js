import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import I18n from 'react-native-i18n'

// <Text> {JSON.stringify(this.props.user)}</Text>
class Profile extends Component{


_onPressAddStory(){

  }

_onPressViewMessages(){

}

featuredStory() {

  }

  render() {
    console.log(this.props.user.name)
    return (
      <View style={styles.container}>
        <Text>{I18n.t('username') + ": " + this.props.user.username}</Text>
        <Text style={styles.title}>{this.props.user.name + "'s " + I18n.t('profile')}</Text>

        <Text style={styles.featuredStory}>"My day today was very interesting First I woke up late and I couldn't find my clean clothes and my mom......"</Text>
        <Text style={styles.featuredStoryArabic}>كان يوم لي اليوم مثيرة جدا للاهتمام. أولا استيقظت في وقت متأخر، وأنا لا يمكن أن تجد لي ملابس نظيفة وأمي</Text>


        <TouchableHighlight onPress={this._onPressAddStory.bind(this)} style={styles.button}>
        <Text style={styles.buttonText}>
        Add Story
        </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._onPressViewMessages.bind(this)} style={styles.button}>
        <Text style={styles.buttonText}>
        View Messages
        </Text>
        </TouchableHighlight>


        <Text style={styles.body}> {JSON.stringify(this.props.users)}</Text>
        <Text style={styles.body}> This will be a list of user stories </Text>

        <Text> Personal Info </Text>
        <Text> Contact Info </Text>
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
});

module.exports = Profile;
