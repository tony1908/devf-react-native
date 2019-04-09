/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import { ListItem, Input } from 'react-native-elements'
const axios = require('axios');

type Props = {};
export default class Beers extends Component<Props> {

  state = {
    beers: [],
    searchResults: []
  }

  componentDidMount() {
    axios.get('https://api.openbrewerydb.org/breweries').then(res => {
      this.setState({
        beers: res.data,
        searchResults: res.data
      })
    }).catch(error => {
      console.log('el error:', error)
    })
  }

  handleSearch = text => {
    const results = this.state.beers.filter(element => {
      return element.name.indexOf(text) > -1
    })
    this.setState({
      ...this.state,
      searchResults: results
    })
  }

  render() {
    return (
      <View>
        <Input
          placeholder='Search'
          leftIcon={{ name: 'search' }}
          onChangeText={this.handleSearch}
        />
        <ScrollView style={styles.container}>
          {this.state.searchResults.map((element, index) => (
            <ListItem
              key={index}
              title={element.name}
              subtitle={element.city}
              onPress={() => this.props.navigation.navigate('Beer', element)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    marginTop: '5%'
  },
  text: {
      color: 'blue'
  }
});