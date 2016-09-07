import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

import Story from './story';
import I18n from 'react-native-i18n'

class UserStories extends Component{
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
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
      this.setState({dataSource: ds.cloneWithRows(stories)})
  }

  _onPressStory(clickedStory) {
    this.props.navigator.push({
      title: I18n.t('story'),
      component: Story,
      passProps: {story: clickedStory},
    })
  }

  newestStory() {
    return(
      <View style={{backgroundColor: 'powderblue'}}>
        <Text style={{color: 'purple', textAlign: 'left'}}>Monday August 24, 2016</Text>
        <Text>"My day today was very interesting. First I woke up late and I couldn't find my clean clothes and my mom......"</Text>
        <Text>كان يوم لي اليوم مثيرة جدا للاهتمام. أولا استيقظت في وقت متأخر، وأنا لا يمكن أن تجد لي ملابس نظيفة وأمي</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Smeagles Stories</Text>
        <Text> `TEST TO CALL USERID PROPS!!!!!! ${this.props.userId}`</Text>
        <ListView
          style={styles.listItems}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View>
              <Text style={{textAlign: 'center', color: '#27c2dc'}}>  {rowData.created_at} </Text>
              <TouchableHighlight onPress={ () => this._onPressStory()}>
                <Text style={styles.listText}> {rowData.title} </Text>
              </TouchableHighlight>
            </View>
          }
          renderHeader={ () => this.newestStory() }
        />
      </View>
    )
  }
};

var styles = StyleSheet.create({
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
  listText: {
    fontSize: 20,
    flex: 2,
    textAlign: 'center',
  }
});

module.exports = UserStories;
