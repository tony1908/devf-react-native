/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import { ListItem } from 'react-native-elements'
const axios = require('axios');

type Props = {};
export default class Beers extends Component<Props> {

  state = {
    beers: []
  }

  componentDidMount() {
    axios.get('https://api.openbrewerydb.org/breweries').then(res => {
      this.setState({
        beers: res.data
      })
    }).catch(error => {
      console.log('el error:', error)
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text} > Holiiii </Text>
        {this.state.beers.map((element, index) => (
          <ListItem
            key={index}
            title={element.name}
            subtitle={element.city}
            onPress={() => this.props.navigation.navigate('Beer', element)}
          />
        ))}
      </ScrollView>
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