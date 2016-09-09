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

  componentDidMount() {
      this.fetchData().done()
  }

  onSearchTextChanged(text) {
  console.log('onSearchTextChanged');
  this.setState({ searchString: text });
  console.log(this.state.searchString);
  }

  // onPressSearchResult() {
  //
  // }

  async fetchData() {
      var url = 'https://simulnos.herokuapp.com/api'
      const response = await fetch(url)
      const json = await response.json()
      const stories = json.stories
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({dataSource: ds.cloneWithRows(stories),
      stories: stories})
  }

  executeQuery(searchString) {

  var storyobjects = this.state.stories
  var searchtext = this.state.searchString
  var regex = new RegExp(searchtext, 'gi')
  var resultarray = []
  var searchresults = []

  for(var i=0; i < storyobjects.length; i++) {
    var result = storyobjects[i].content.match(regex)
    if (result !== null) {
        resultarray.push(result);
      }
    // resultarray.forEach(result, index) {
    //   searchresults.push(result);
    //   }
    }
};

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
      //   <TextInput
      //     <ListView
      //       style={styles.listItems}
      //       dataSource={this.state.dataSource}
      //       renderRow={(rowData) =>
      //         <TouchableHighlight
      //           onPress={ () => this.onPressSearchResult(rowData)}>
      //           <Text style={styles.listText}>{rowData.title}</Text>
      //           </TouchableHighlight>}
      //   />
      // </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    height: 34,
    padding: 5,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#29c5da',
    color: '#48BBEC',
    backgroundColor: '#FFFFFF',
  },

  // buttonText: {
  // fontSize: 18,
  // color: 'white',
  // alignSelf: 'center'
  // },
  //
  // button: {
  //   height: 36,
  //   flex: 1,
  //   flexDirection: 'row',
  //   backgroundColor: '#27C2DC',
  //   borderColor: '#27C2DC',
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   marginBottom: 10,
  //   alignSelf: 'stretch',
  //   justifyContent: 'center'
  // },
});

module.exports = Search;
