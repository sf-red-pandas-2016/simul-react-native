import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  ScrollView,
  NavigatorIOS,
} from 'react-native';

import Story from './story';
import I18n from 'react-native-i18n';

class UserStories extends Component{
    constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      stories: '?',
      userId: this.props.userId,
      name: this.props.name,
      username: this.props.username,
      dataSource: ds.cloneWithRows(['mama', 'mia', 'pizzeria'])
    };
  }


  componentDidMount() {
      this.fetchData().done()
  }

  async fetchData() {
      var url = `https://simulnos.herokuapp.com/api/users/${this.state.userId}/stories`
      const response = await fetch(url)
      const json = await response.json()
      const stories = json.stories
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({dataSource: ds.cloneWithRows(stories), stories: stories})
  }


  _onPressStory(clickedStory) {
    console.log(clickedStory)
    this.props.navigator.push({
      title: I18n.t('story'),
      component: Story,
      passProps: {story: clickedStory},
    })
  }

  render() {
    return (
      <ScrollView style={styles.superContainer}>
        <View style={styles.container}>
          <Text style={{marginTop: 25, fontWeight: 'bold'}}>{I18n.t('storiesBy') + " " + this.state.name}</Text>

          <ListView
            style={styles.listItems}
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <View>
                <TouchableHighlight onPress={ () => this._onPressStory(rowData)}>
                  <Text style={styles.listText}> {rowData.title} </Text>
                </TouchableHighlight>
                <Text style={{textAlign: 'center', color: '#27c2dc'}}>  {rowData.created_at} </Text>
              </View>
            }
          />
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
    paddingTop: 60,
  },
  title: {
   flex: 2,
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
  listItems: {
    flex: 50,

  },
  listText: {
    backgroundColor: '#29c5da',
    fontFamily: 'Farah',
    fontWeight: "normal",
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#29c5da',
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    height: 50,
  },
});

module.exports = UserStories;
