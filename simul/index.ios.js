/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Enter from './app/components/enter.js';

class simul extends Component {
  // renderScene(route, navigator) {
  //   console.log(route);
  //   if(route.name == 'enter') {
  //    return <Enter navigator={navigator} />
  //   }
  //  if(route.name == 'register') {
  //    return <Register navigator={navigator} />
  //  }
  //  if(route.name == 'login') {
  //    return <Login navigator={navigator} />
  //  }
  //  if(route.name == 'home') {
  //    return <Home navigator={navigator} {...route.passProps} />
  //  }
  //  if(route.name == 'update') {
  //    return <Update navigator={navigator} {...route.passProps} />
  //  }

    // }
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Enter', index: 0 }}
        renderScene={(route, navigator) => {
          return <Enter title={route.title} />
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('simul', () => simul);
