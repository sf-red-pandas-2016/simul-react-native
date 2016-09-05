import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import Enter from './app/components/enter';
// ======= OLD NAV
// import Enter from './app/components/enter.js';
// import Home from './app/components/home.js';
// import Contact from './app/components/contact.js';
// import Login from './app/components/login.js';
// import NewStory from './app/components/newStory.js';
// import Profile from './app/components/profile.js';
// import Register from './app/components/register.js';
// import Story from './app/components/story.js';
// import UserStories from './app/components/userStories.js';
// import UserMessages from './app/components/userMessages.js';
// import Message from './app/components/message.js';
// import Nav from './app/components/nav.js'


class simul extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Enter,
          title: 'Simul',
        }}
        style={{flex: 1}}
        />
      // ======= OLD NAV
//       <Navigator
//         initialRoute={routes[2]}
//         initialRouteStack={routes}
//         renderScene={(route, navigator) => {
//           if(route.title == 'Enter') {
//            return <Enter title={route.title} />
//           }
//           if(route.title == 'Home') {
//            return <Home title={route.title} />
//           }
//           if(route.title == 'Profile') {
//            return <Profile title={route.title} />
//           }
//           if(route.title == 'UserStories') {
//            return <UserStories title={route.title} />
//           }
//           if(route.title == 'Register') {
//            return <Register title={route.title} />
//           }
//           if(route.title == 'Login') {
//            return <Login title={route.title} />
//           }
//           if(route.title == 'Story') {
//            return <Story title={route.title} />
//           }
//           if(route.title == 'NewStory') {
//            return <NewStory title={route.title} />
//           }
//           if(route.title == 'Contact') {
//            return <Contact title={route.title} />
//           }
//           if(route.title == 'UserMessages') {
//            return <UserMessages title={route.title} />
//           }
//           if(route.title == 'Message') {
//            return <Message title={route.title} />
//           }
//          if(route.title == 'Nav'){
//            return <Nav title={route.title} />
//          }
//
    );
  }
}

AppRegistry.registerComponent('simul', () => simul);
