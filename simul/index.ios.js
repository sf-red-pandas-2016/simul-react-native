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
  Navigator,
  TouchableHighlight
} from 'react-native';

import Enter from './app/components/enter.js';
import Home from './app/components/home.js';
import Contact from './app/components/contact.js';
import Login from './app/components/login.js';
import NewStory from './app/components/newStory.js';
import Profile from './app/components/profile.js';
import Register from './app/components/register.js';
import Story from './app/components/story.js';
import UserStories from './app/components/userStories.js';
import UserMessages from './app/components/userMessages.js';
import Message from './app/components/message.js';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c28dd907ed8754ecea5a849439c171c3c24009e6

=======
>>>>>>> bd0db10162f82409d0b4f5e82d7f51af727914c5
import Nav from './app/components/nav.js'


class simul extends Component {
  // renderScene(route, navigator) {
  //   console.log(route);
  //    if(route.name == 'enter') {
  //     return <Enter navigator={navigator} />
  //    }
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
    const routes = [
      {title: 'Enter', index: 0},
      {title: 'Home', index: 1},
      {title: 'Login', index: 2},
      {title: 'Register', index: 3},
      {title: 'Profile', index: 4},
      {title: 'UserStories', index: 5},
      {title: 'Story', index: 6},
      {title: 'NewStory', index: 7},
      {title: 'Contact', index: 8},
      {title: 'UserMessages', index: 9},
      {title: 'Message', index: 10},
      {title: 'Nav', index: 11},
    ];
    //Alternative navigator
    // <Navigator
    //   initialRoute={{ title: 'Enter', index: 0 }}
    //   renderScene={(route, navigator) => {
    //     return <Enter title={route.title} />
    //   }}
    // />
    return (
      <Navigator
<<<<<<< HEAD

        initialRoute={routes[2]}
=======
        initialRoute={routes[0]}
>>>>>>> bd0db10162f82409d0b4f5e82d7f51af727914c5
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          if(route.title == 'Enter') {
           return <Enter title={route.title} />
          }
          if(route.title == 'Home') {
           return <Home title={route.title} />
          }
          if(route.title == 'Profile') {
           return <Profile title={route.title} />
          }
          if(route.title == 'UserStories') {
           return <UserStories title={route.title} />
          }
          if(route.title == 'Register') {
           return <Register title={route.title} />
          }
          if(route.title == 'Login') {
           return <Login title={route.title} />
          }
          if(route.title == 'Story') {
           return <Story title={route.title} />
          }
          if(route.title == 'NewStory') {
           return <NewStory title={route.title} />
          }
          if(route.title == 'Contact') {
           return <Contact title={route.title} />
          }
          if(route.title == 'UserMessages') {
           return <UserMessages title={route.title} />
          }
          if(route.title == 'Message') {
           return <Message title={route.title} />
          }
         if(route.title == 'Nav'){
           return <Nav title={route.title} />
         }

        }}
      />
      // <Navigator
      //   initialRoute={routes[0]}
      //   initialRouteStack={routes}
      //   renderScene={(route, navigator) =>
      //     <TouchableHighlight onPress={() => {
      //       if (route.index === 0) {
      //         navigator.push(routes[1]);
      //       } else {
      //         navigator.pop();
      //       }
      //     }}>
      //       <Text>Hello {route.title}!</Text>
      //     </TouchableHighlight>
      //   }
      //   style={{padding: 100}}
      // />
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
