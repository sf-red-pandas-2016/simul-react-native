import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

import Message from './message';
import I18n from 'react-native-i18n'

class UserMessages  extends Component{
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userId: this.props.userId,
      name: this.props.name,
      username: this.props.username,
      dataSource: ds.cloneWithRows(['mama', 'mia', 'pizzeria']),
      };
  }

  componentDidMount() {
      this.fetchData().done()
  }

  async fetchData() {
      var url = `https://simulnos.herokuapp.com/api/users/${this.state.userId}/messages`
      const response = await fetch(url)
      const json = await response.json()
      const messages = json.messages
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({dataSource: ds.cloneWithRows(messages)})
  }

  _onPressMessage(message) {
    this.props.navigator.push({
      title: I18n.t('message'),
      component: Message,
      passProps: {message: message, userId: this.state.userId, name: this.state.name},
    })
  }

    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.to}>{this.state.name}</Text>
        <ListView
          style={styles.listItems}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View>
              <Text style={{textAlign: 'center', color: '#27c2dc'}}>  {rowData.created_at} </Text>
              <TouchableHighlight onPress={ () =>
                this._onPressMessage(rowData)}>
                <Text style={styles.listText}> {rowData.subject} </Text>
              </TouchableHighlight>
            </View>
          }
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
  to: {
    alignSelf: 'flex-end',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 60,
  },
  listText: {
    fontSize: 20,
    flex: 2,
    textAlign: 'center',
  }
});

module.exports = UserMessages;
