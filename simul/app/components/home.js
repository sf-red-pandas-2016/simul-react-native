import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
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
      component: Login
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
      component: Register
    })
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
      title: I18n.t('stories'),
      component: UserStories
    })
  }

  featuredStory() {
      return(
        <View style={{backgroundColor: '#FFB30F', borderWidth: 3, borderColor: '#27c2dc', padding: 10}}>
          <Text style={{color: 'white'}}>"My day today was very interesting. First I woke up late and I couldn't find my clean clothes and my mom......"</Text>
          <Text>كان يوم لي اليوم مثيرة جدا للاهتمام. أولا استيقظت في وقت متأخر، وأنا لا يمكن أن تجد لي ملابس نظيفة وأمي</Text>
          <Text style={{textAlign: 'right'}}>-Ahmed</Text>
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
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFB30F'}}>
          <TouchableHighlight onPress={ () => this._onPressLogin()}>
            <Text style={styles.navLeft}> {I18n.t('login')} </Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={ () => this._onPressRegister()}>
            <Text style={styles.navRight}> {I18n.t('register')} </Text>
          </TouchableHighlight>
        </View>

        <Search />

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
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 60,
  },
  title: {
    flex: .5,
    backgroundColor: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  listItems: {
    flex: 9.5,
  },
  listText: {
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#27c2dc',
    borderRadius: 4,
    marginBottom: 5,
    padding: 10,
    height: 50,
  },
  navLeft: {
    flex: .25,
    color: 'black',
    fontFamily: 'Farah',
    backgroundColor: '#FFB30F',
    textAlign: 'center',
    marginRight: 110,
    padding: 10,
  },
  navRight: {
    flex: .25,
    color: 'black',
    fontFamily: 'Farah',
    backgroundColor: '#FFB30F',
    textAlign: 'center',
    marginLeft: 110,
    padding: 10,
  },
});

module.exports = Home;
