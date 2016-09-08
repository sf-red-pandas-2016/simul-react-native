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

class NewStory extends Component{
  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.userId,
    }
  }
  _onPressAddPhoto() {
    this.props.navigator.push({
      title: I18n.t('photo'),
      component: ImageUpload,
      passProps: {userId: this.state.userId},
    })
  }

  render() {
    return (
      <ScrollView style={styles.superContainer}>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>
            {I18n.t('newStory')}
          </Text>
          <TextInput
            style={styles.searchInput}
            placeholder={I18n.t('writeStoryHere')}/>
            <TouchableHighlight
              onPress={() => this._onPressAddPhoto()}
              style={styles.button}
              underlayColor="white">
                <Text style={styles.buttonText}>+ {I18n.t('photo')}</Text>
            </TouchableHighlight>
          <TouchableHighlight
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
    height: 100,
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
