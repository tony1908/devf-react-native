import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Card, ListItem } from 'react-native-elements'

type Props = {};
export default class Beer extends Component<Props> {

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'No Name');
    const type = navigation.getParam('brewery_type', 'No type');
    const city = navigation.getParam('city', 'No city');
    const phone = navigation.getParam('phone', 'No phone'); 
    return (
        <Card title="Beer Info">
            <View>
                <ListItem
                    key={1}
                    title={"Name: " + name}
                />
                <ListItem
                    key={2}
                    title={"Type: " + type}
                />
                <ListItem
                    key={3}
                    title={"City: " + city}
                />
                <ListItem
                    key={4}
                    title={"Phone: " + phone}
                />
            </View>
        </Card>
    );
  }
}

const styles = StyleSheet.create({
});