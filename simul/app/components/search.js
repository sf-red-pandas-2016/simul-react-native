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
      isLoading: false,
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
  console.log(searchString);
  this.setState({ isLoading: true });

  var storyobjects = this.state.stories
  var searchtext = this.state.searchString
  var regex = new RegExp(searchtext, 'gi')
  var resultarray = []

  for(var i=0; i < storyobjects.length; i++) {
    console.log(storyobjects.length);
    console.log(searchtext);
    console.log(regex);
    var result = storyobjects[i].content.match(regex)
    resultarray.push(result)
    console.log(resultarray);
    }
    return resultarray;
  }

  render() {
    // console.log('Search.render');
    return (
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={I18n.t('Search')}
            onChangeText={this.onSearchTextChanged.bind(this)}
          />
          <TouchableHighlight style={styles.button} onPress={ () => this.executeQuery(this.state.searchString)}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
      </View>

      // <View style={styles.container}>
      //   <TextInput
      //     <ListView
      //       style={styles.listItems}
      //       dataSource={this.state.dataSource}
      //       renderRow={(rowData) =>
      //         <TouchableHighlight
      //           onPress={ () => this._onPressStory(rowData)}>
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
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#27c2dc',
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#27C2DC',
    borderRadius: 8,
    color: '#48BBEC',
    // height: 30,
    // flex: 1,
    // paddingHorizontal: 8,
    // fontSize: 15,
    backgroundColor: '#FFFFFF',
    // borderRadius: 2,
  },
  buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#27C2DC',
    borderColor: '#27C2DC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
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
