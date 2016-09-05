import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

class UserStories extends Component{
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Story 1', 'Story 2', 'Story 3', 'Story 4', 'Story 5', 'Story 6', 'Story 7', 'Story 8', 'Story 9', 'Story 10', 'Story 11'
      ])
    };
  }

  _onPressStory() {
    this.props.navigator.push({
      title: 'Story',
      component: Story
    })
  }

  newestStory() {
    return(
      <View style={{backgroundColor: 'lightgrey'}}>
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
        <ListView
          style={styles.listItems}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <TouchableHighlight onPress={ () => this._onPressStory()}><Text style={styles.listText}>{rowData}</Text></TouchableHighlight>}
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
  },
  title: {
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
});

module.exports = UserStories;
