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
      dataSource: ds.cloneWithRows([
        'Tuesday August 23, 2016', 'Wednesday August 10, 2016', 'Wednesday August 3, 2016', 'Thursday July 28, 2016', 'Monday July 18, 2016', 'Thursday July 14, 2016', 'Saturday July 2, 2016', 'Story 8', 'Story 9', 'Story 10', 'Story 11', 'Story 8', 'Story 9', 'Story 10', 'Story 11', 'Story 8', 'Story 9', 'Story 10', 'Story 11', 'Story 8', 'Story 9', 'Story 10', 'Story 11', 'Story 8', 'Story 9', 'Story 10', 'Story 11',
      ])
    };
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
