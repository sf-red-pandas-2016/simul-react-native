import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import ImageUpload from './imageUpload';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import UserStories from './userStories';
import Story from './story2';


class NewStory extends Component{

  constructor(props) {
    super(props);

    this.state = {
      user_Id: this.props.userId,
      name: this.props.name,
      username: this.props.username,
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
      console.log(res.story);
        this.props.navigator.push({
          title: I18n.t('story'),
          component: Story,
          passProps: {
             story_created_at: res.story.created_at,
             story_title: res.story.title,
             story_content: res.story.content,
             userId: this.state.user_Id,
             name: this.state.name,
           },
        })
  }

  _onPressAddPhoto() {
    this.props.navigator.push({
      title: I18n.t('photo'),
      component: ImageUpload,
      passProps: {userId: this.state.user_Id},
    })
  }

  render() {
    return (
      <ScrollView style={styles.superContainer}>
        <View style={styles.mainContainer}>
        <TextInput
          onChangeText={ (val)=> this.setState({title: val}) }
          style={styles.searchInput}
          placeholder={I18n.t('subject')}/>
        <TextInput
          onChangeText={ (val)=> this.setState({content: val}) }
          style={styles.message}
          placeholder={I18n.t('content')}/>
          <TouchableHighlight
            onPress={() => this._onPressAddPhoto()}
            style={styles.button}
            underlayColor="white">
              <Text style={styles.buttonText}>+ {I18n.t('photo')}</Text>
          </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this._onPressSend()}
          style={styles.button}
          underlayColor="white">
            <Text style={styles.buttonText}>{I18n.t('post')}</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>

      )
  }
};
var styles = StyleSheet.create({
  superContainer: {
   flex: 1,
   backgroundColor: '#27c2dc',
 },
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
    marginTop: 5,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 2,
    marginLeft: 2,
  },
  message: {
    height: 200,
    padding: 4,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    marginRight: 2,
    marginLeft: 2,
    marginTop: 2,
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
    marginTop: 10,
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});




module.exports = NewStory;
