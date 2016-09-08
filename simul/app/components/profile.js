import React, { Component } from 'react';



import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Mapview,
  ListView,
} from 'react-native';

import Avatar from 'react-native-interactive-avatar';
import I18n from 'react-native-i18n';
import NewStory from './newStory';
import UserMessages from './userMessages';
import Contact from './contact';
import userStories from './userStories';
import MapView from 'react-native-maps';


// <Text> {JSON.stringify(this.props.user)}</Text>
class Profile extends Component{

  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.user.id,
      name: this.props.user.name,
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

  _onPressFeaturedStory(){

  }

  latestStory() {
    var recentStory = this.state.userId.stories.slice(-1)[0]
    return(
    <View style={{backgroundColor: '#FFB30F', borderWidth: 10, height: 100, width: 100, borderColor: '#27c2dc', padding: 10}}>
      <TouchableHighlight onPress={ () => this._onPressFeaturedStory()}>
      <Text style={{color: 'white'}}>{recentStory.content}</Text>
      </TouchableHighlight>
      <Text style={{textAlign: 'right'}}>{recentStory.name}</Text>
    </View>
  )

  }

  _onPressStory(clickedStory) {
    this.props.navigator.push({
      title: I18n.t('story'),
      component: Story,
      passProps: {story: clickedStory},
    })
  }

  _onPressUserStories() {
    this.props.navigator.push({
      title: this.state.username,
      component: userStories,
      passProps: { userId: this.state.userId, username: this.state.username, name: this.state.name },
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
    var recentStory = this.state.userId.stories.slice(-1)[0]
    return (
      <View style={styles.container}>
        <Avatar
             source={'https://media2.giphy.com/media/sbLpwwHlgls8E/giphy.gif'}
             size={'medium'}
             interactive={true}
             onChange={this.handleImageChange}
         />

        <Text style={styles.title}>{this.props.user.name + "'s " + I18n.t('profile')}</Text>



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

        <TouchableHighlight onPress={() => this._onPressUserStories()} style={styles.button}>
          <Text style={styles.buttonText}> {this.props.user.name + "'s " + I18n.t('stories')} </Text>
        </TouchableHighlight>

        <View style={styles.personalInfo}>
        <Text style={styles.personalInfoHeading}> {I18n.t('about')} {this.props.user.name}: </Text>
        <Text style={styles.personalInfoLocation}> Location: {this.props.user.location}  </Text>
        <Text style={styles.personalInfoResources}> Resources: {this.props.user.resource_request} </Text>
        <Text style={styles.personalInfoSeeking}> Seeking: {this.props.user.seeking} </Text>
        <Text style={styles.personalInfoSkills}> Skills: {this.props.user.skills} </Text>
        <Text style={styles.personalInfoBio}> Bio: {this.props.user.bio} </Text>
        </View>


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
    marginTop: 60,
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
    backgroundColor: '#27c2dc',
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
  personalInfoHeading: {
    textAlign: 'left',
    marginBottom: 20
  },
  personalInfoLocation: {
    fontSize: 10,
  },
  personalInfoResources: {
    fontSize: 10,
  },
  personalInfoSeeking: {
    fontSize: 10,
  },
  personalInfoSkills: {
    fontSize: 10,
  },
  personalInfoBio: {
    fontSize: 10,
  },
  googleMap: {
    height: 200,
    margin: 40,
  },

  });

module.exports = Profile;
