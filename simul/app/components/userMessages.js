import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  ScrollView,
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
      tintColor: "#29c5da",
      component: Message,
      passProps: {message: message, userId: this.state.userId, name: this.state.name},
    })
  }

    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.to}>{this.state.name.toUpperCase()}</Text>
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
  superContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: 'white',
  },
  title: {
   flex: 2,
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
  to: {
    fontFamily: 'Avenir-Roman',
    color: '#6d6f6f',
    fontSize: 28,
    textAlign: 'center',
    margin: 40,
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

module.exports = UserMessages;
