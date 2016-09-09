import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
} from 'react-native';

import Search from './search';
import Login from './login';
import Register from './register';
import Story from './story';
import UserStories from './userStories';
import api from '../Utils/api.js';

import I18n from 'react-native-i18n'

class Home extends Component{

  constructor(props) {
    super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      stories: '?',
      dataSource: ds.cloneWithRows(['harry', 'potter']),
    };
  }

  componentDidMount() {
      this.fetchData().done()
  }

  async fetchData() {
      var url = 'https://simulnos.herokuapp.com/api'
      const response = await fetch(url)
      const json = await response.json()
      const stories = json.stories
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({dataSource: ds.cloneWithRows(stories),
      stories: stories})
  }

  _onPressLogin() {
    this.props.navigator.push({
      title: I18n.t('login'),
      component: Login,
      tintColor: "#29c5da",
    })
  }

  handleSubmit(){
    var note = this.state.note;
    this.setState({
      note: ''
    });
    api.addNote(this.props.userInfo.login, note)
      .then((data) => {
        api.getNotes(this.props.userInfo.login)
          .then((data) => {
            this.setState({
              dataSource: this.ds.cloneWithRows(data)
            })
          });
      })
      .catch((error) => {
        console.log('Request failed', error);
        this.setState({error})
      });
  }


  _onPressRegister() {
    this.props.navigator.push({
      title: I18n.t('register'),
      component: Register,
      tintColor: "#29c5da",
    })
  }

  _onPressStory(clickedStory) {
    this.props.navigator.push({
      title: I18n.t('story'),
      component: Story,
      tintColor: "#29c5da",
      passProps: {story: clickedStory},
    })
  }

  _onPressUserStories() {
    this.props.navigator.push({
      title: I18n.t('stories'),
      component: UserStories,
      tintColor: "#29c5da",
    })
  }

  _onPressFeaturedStory() {

  }

  _onPressFeaturedProfile() {

  }

  featuredStory() {
    var recentStory = this.state.stories.slice(-1)[0];

    if (recentStory.photo !== null) {
      var photo = recentStory.photo
    }

    console.log(recentStory);

      return(
        <View style={{backgroundColor: 'white' }}>

        <Text style={{textAlign: 'left', fontFamily: 'Avenir-Roman', fontSize: 28, color: '#6d6f6f', padding: 5 }}>{I18n.t('latestStory')}</Text>

        <Image source={{uri: photo }} style={{width: 400, height: 225}}/>

          <TouchableHighlight onPress={ () => this._onPressFeaturedStory()}>
            <Text style={{color: '#4a4c4d', textAlign: 'center', padding: 5, fontFamily: 'Farah', fontSize: 16, paddingTop: 15, }}>{ recentStory.content }</Text>
          </TouchableHighlight>

        <TouchableHighlight onPress={ () => this._onPressFeaturedProfile()}>
            <Text style={{textAlign: 'right'}}></Text>
          </TouchableHighlight>
        </View>
      )
  }

  fetchUserData() {
    fetch('http:///simulnos.herokuapp.com/api/users').then(function(response){
      return response.json()
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FDFEFE'}}>
          <TouchableHighlight onPress={ () => this._onPressLogin()}>
            <Text style={styles.navLeft}> {I18n.t('login')} </Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={ () => this._onPressRegister()}>
            <Text style={styles.navRight}> {I18n.t('register')} </Text>
          </TouchableHighlight>
        </View>

        <Search />

        <View style ={styles.list}>
        <ListView
            style={styles.listItems}
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <TouchableHighlight
                onPress={ () => this._onPressStory(rowData)}>
                <Text style={styles.listText}>{rowData.title}</Text>
              </TouchableHighlight>}
            renderHeader={ () => this.featuredStory() } />
        </View>
        </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    flex: .5,
    backgroundColor: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  listItems: {
    flex: 50,
    // margin: 8

  },
  list: {
    flex: 40,
    padding: 8,
  },
  listText: {
    backgroundColor: '#29c5da',
    fontFamily: 'Farah',
    fontWeight: "normal",
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    letterSpacing: 0.5,
    borderWidth: 2,
    borderColor: '#29c5da',
    marginTop: 5,
    marginBottom: 5,
    padding: 6,
    paddingLeft: 7,
    paddingRight: 7,
    height: 50,
  },
  navLeft: {
    flex: .25,
    color: '#29c5da',
    fontFamily: 'Farah',
    backgroundColor: 'white',
    textAlign: 'center',
    marginRight: 110,
    padding: 10,
  },
  navRight: {
    flex: .25,
    color: '#29c5da',
    fontFamily: 'Farah',
    backgroundColor: 'white',
    textAlign: 'center',
    marginLeft: 110,
    padding: 10,
  },
});

module.exports = Home;
