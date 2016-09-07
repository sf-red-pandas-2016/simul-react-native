import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import I18n from 'react-native-i18n'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#27c2dc',
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});

const Search = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={I18n.t('search')}
      onChangeText={(text) => console.log('searching for ', text)}
    />
  </View>
);

module.exports = Search;
