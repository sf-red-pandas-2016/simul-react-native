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

import Root from './root';

class simul extends Component {
  renderScene(route, navigator) {
    console.log(route);
    if(route.name == 'root') {
     return <Root navigator={navigator} />
    }
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

    }
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'root'}}
          renderScene={this.renderScene.bind(this)}
          />
        <Text style={styles.welcome}>
          SIMUL
        </Text>
      </View>
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
