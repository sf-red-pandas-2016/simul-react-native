import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import I18n from 'react-native-i18n'

class Message extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>{I18n.t('message')}</Text>
        <Text style={styles.to}>Jim Smith</Text>
        <Text style={styles.from}>{I18n.t('from')} Tom Smith</Text>
        <Text>{I18n.t('senderContact')}</Text>
        <Text>"gollum@hotmail.com"</Text>
        <Text style={styles.from}>{I18n.t('date')} 08/04/2016</Text>
        <Text style={styles.title}>{I18n.t('subject')} Europe</Text>
        <Text>{I18n.t('content')}</Text>
        <Text style={styles.content}>Europe is close to limit on accepting refugees, EU President Donald Tusk said Sunday, as he urged the international community to do more to step up resettlement of those seeking refuge.</Text>
      </View>
    )
  }
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27c2dc'
  },
  title: {
   fontSize: 40,
   alignSelf: 'center',
   margin: 40,
   backgroundColor: '#27c2dc',
  },
  from: {
    alignSelf: 'flex-start',
    fontSize: 21,
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 5,
  },
  to: {
    alignSelf: 'flex-end',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 60,
  },
  content: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
  }
});


module.exports = Message;
