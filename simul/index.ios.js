import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import I18n from 'react-native-i18n'

I18n.fallbacks = true;

I18n.translations = {
  en: {
    login: 'Login',
    enter: 'Enter',
    register: 'Register',
    home: 'Home',
    username: 'Username',
    password: 'Password',
    name: 'Name',
    location: 'Location',
    bio: 'Bio',
    skills: 'Skills/Expertise',
    contactInformation: 'Contact Information',
    resourceRequest: 'Resource Request',
    seeking: 'Opportunities Seeking',
    search: 'Search',
    story: 'Story',
    stories: 'Stories',
    message: 'Message',
    messages: 'Messages',
    profile: 'Profile',
    createAccount: 'Create a Simul Account',
  },
  ar: {
    login: 'دخول',
    username: 'اسم المستخدم',
    password: 'كلمه السر',
    name: 'اسم',
    enter: 'أدخل',
    register: 'تسجيل',
    home: 'منزل',
    bio: 'سيرة',
    location: 'موقع',
    contactInformation: 'معلومات الاتصال',
    skills: 'مهارات',
    seeking: 'فرص تسعى',
    resourceRequest: 'الموارد أريد',
    search: 'بحث',
    story: 'قصة',
    stories: 'قصص',
    profile: 'الملف الشخصي',
    message: 'الرسالة',
    messages: 'رسائل',
  }
}

import Enter from './app/components/enter.js';

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
    );
  }
}

AppRegistry.registerComponent('simul', () => simul);
