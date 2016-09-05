import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

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

  _onPressStory() {
    // this.props.navigator.renderScene(routes[6])({
    //   title: 'Story',
    //   component: Story
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>HOME PAGE YA</Text>
        <Text style={styles.nav}>Login</Text>
        <Text style={styles.nav}>Register</Text>
        <ListView
          style={styles.listItems}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <TouchableHighlight onPress={ () => this._onPressStory()}><Text style={{
            textAlign: 'center', }}>{rowData}</Text></TouchableHighlight>}/>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27c2dc',
    paddingTop: 22,
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
  nav: {
    flex: .25,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Farah',
    backgroundColor: '#FFB30F'
  }
});

module.exports = Home;
