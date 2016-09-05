import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

class UserStories extends Component{
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
