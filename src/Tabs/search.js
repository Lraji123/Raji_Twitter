import React, { Component } from 'react';
import { Image,view } from 'react-native';
import { Container, Header, Item, Input, Icon, Button,Body, Text } from 'native-base';
export default class App extends React.Component {
  state={
    isReady: false
  }
  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  this.setState({isReady:true})
}
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
      return (
         <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button >
        </Header>
        <Body>
        <Button full>
        <Text> Back</Text>
        </Button>
        </Body>
        </Container>
            );
  }
}
