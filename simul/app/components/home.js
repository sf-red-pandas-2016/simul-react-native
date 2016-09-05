import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

import Search from './search';
import Login from './login';
import Register from './register';
import Story from './story';


class Home extends Component{
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Bilbo', 'Aragorn', 'Frodo', 'Legolas', 'Saruman', 'Elrond', 'Smeagol', 'Gimli', 'Bilbo', 'Aragorn', 'Frodo', 'Legolas', 'Saruman', 'Elrond', 'Smeagol', 'Gimli', 'Bilbo', 'Aragorn', 'Frodo', 'Legolas', 'Saruman', 'Elrond', 'Smeagol', 'Gimli','Bilbo', 'Aragorn', 'Frodo', 'Legolas', 'Saruman', 'Elrond', 'Smeagol', 'Gimli', 'Bilbo', 'Aragorn', 'Frodo', 'Legolas', 'Saruman', 'Elrond', 'Smeagol', 'Gimli', 'Bilbo', 'Aragorn', 'Frodo', 'Legolas', 'Saruman', 'Elrond', 'Smeagol', 'Gimli'
      ])
    };
  }
  _onPressLogin() {
    this.props.navigator.push({
      title: 'Login',
      component: Login
    })
  }

  _onPressRegister() {
    this.props.navigator.push({
      title: 'Register',
      component: Register
    })
  }

  _onPressStory() {
    this.props.navigator.push({
      title: 'Story',
      component: Story
    })
  }

  featuredStory() {
      return(
        <View style={{backgroundColor: 'lightgrey'}}>
        <Text>"My day today was very interesting. First I woke up late and I couldn't find my clean clothes and my mom......"</Text>
        <Text style={{color: 'purple', textAlign: 'right'}}>-Ahmed</Text>
        </View>
      )
  }

  fetchUserData() {
    fetch('http:///simulnos.herokuapp.com/api/users').then(function(response){
      return response.json()
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>HOME YA</Text>
        <TouchableHighlight onPress={ () => this._onPressLogin()}><Text style={styles.nav}>Login</Text></TouchableHighlight>
        <TouchableHighlight onPress={ () => this._onPressRegister()}><Text style={styles.nav}>Register</Text></TouchableHighlight>
        <Search />
        <ListView
          style={styles.listItems}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <TouchableHighlight onPress={ () => this._onPressStory()}><Text style={
             styles.listText}>{rowData}</Text></TouchableHighlight>}
          renderHeader={ () => this.featuredStory() } />
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#27c2dc',
    paddingTop: 80,
  },
  title: {
    flex: .5,
    backgroundColor: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  listItems: {
    flex: 9,
    backgroundColor: 'powderblue',
  },
  listText: {
    color: '#32161F',
    textAlign: 'center',
  },
  nav: {
    flex: .25,
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Farah',
    backgroundColor: '#FFB30F',
    textAlign: 'center',
  }
});

module.exports = Home;
