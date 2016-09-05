import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>HOME PAGE YA</Text>
        <ListView
          style={styles.listItems}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{
          textAlign: 'center'}}>{rowData}</Text>}/>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
});

module.exports = Home;
