import React from 'react';
import {Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, List, Title, Footer, Left, Right, Button, Icon, Card, Body, CardItem, FooterTab, Tab, Tabs, Segment, ListItem } from 'native-base';
import Expo from 'expo';
import { Col, Row, Grid } from 'react-native-easy-grid';

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
     <Header hastabs>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
           <Body>
             <Content padder>
          <Content>
          <Form>
            <Item>
            <Button>
              <Icon name="person" />
            </Button>
              <Input placeholder="Profile" />
            </Item>
            <Item>
            <Button>
            <Icon name='list' />
            </Button>
              <Input placeholder="Lists" />
            </Item>
            <Item>
            <Button>
              <Icon name="camera" />
            </Button>
              <Input placeholder="Moments" />
            </Item>
            <Item>
            <Button>
            <Icon name='navigate' />
            </Button>
              <Input placeholder="Highlights" />
            </Item>
            <Item>
            <Button>
            <Icon name='key' />
            </Button>
              <Input placeholder="Settings and Privacy" />
            </Item>
             <Item >
            <Button>
            <Icon name='microphone' />
            </Button>
              <Input placeholder="Help Center" />
            </Item>
          </Form>
        </Content>
        </Content>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
              <Content>
          <Form>
            <Item>
            <Button>
              <Icon name="person" />
            </Button>
              <Input placeholder="Profile" />
            </Item>
            <Item>
            <Button>
            <Icon name='list' />
            </Button>
              <Input placeholder="Lists" />
            </Item>
            <Item>
            <Button>
              <Icon name="camera" />
            </Button>
              <Input placeholder="Moments" />
            </Item>
            <Item>
            <Button>
            <Icon name='navigate' />
            </Button>
              <Input placeholder="Highlights" />
            </Item>
            <Item>
            <Button>
            <Icon name='key' />
            </Button>
              <Input placeholder="Settings and Privacy" />
            </Item>
             <Item >
            <Button>
            <Icon name='microphone' />
            </Button>
              <Input placeholder="Help Center" />
            </Item>
          </Form>
        </Content>
          <Footer>
          <FooterTab>
              <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
          </Container>
    );
  }
}