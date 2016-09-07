import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  TouchableHighlight,
} from 'react-native';

import I18n from 'react-native-i18n'

class Search extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      searchString: '',
      stories: '?',
      dataSource: ds.cloneWithRows([]),
    };
  }

  onSearchTextChanged(event) {
  console.log('onSearchTextChanged');
  this.setState({ searchString: event.nativeEvent.text });
  console.log(this.state.searchString);
  }

  componentDidMount() {
      this.fetchData().done()
  }

  async fetchData() {
      var url = 'https://simulnos.herokuapp.com/api'
      const response = await fetch(url)
      const json = await response.json()
      const stories = json.stories
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({dataSource: ds.cloneWithRows(stories),
      stories: stories})

      if (stories[0].id === 1) {
        console.log('match');
      }

  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={I18n.t('search')}
            onChangeText={this.onSearchTextChanged.bind(this)}
          />
        </View>

      // <View style={styles.container}>
      //   <ListView
      //     style={styles.listItems}
      //     dataSource={this.state.dataSource}
      //     renderRow={(rowData) =>
      //       <TouchableHighlight
      //         onPress={ () => this._onPressStory(rowData)}>
      //         <Text style={styles.listText}>{rowData.title}</Text>
      //       </TouchableHighlight>}
      //     />
      // </View>
    )
  }
};

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

// const Search = (props) => (
//   <View style={styles.container}>
//     <TextInput
//       style={styles.input}
//       placeholder={I18n.t('search')}
//       onChangeText={(text) => console.log('searching for ', text)}
//     />
//   </View>
// );

module.exports = Search;
