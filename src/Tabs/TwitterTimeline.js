import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Input,Title, Text, Button, Icon, Left, Body, Right } from 'native-base';
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
       <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Twitter Timeline</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'C:/Users/Lenovo/Raj/chim_twitterClon/src/assets/baby.jpg'}} />
                <Body>
                  <Text>Narendra Modi</Text>
                  <Text note>Do tune in at 11AM tomorrow #MannHiBaat</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://pbs.twimg.com/media/DSSY9uzUEAEpUIF.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>

            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'C:/Users/Lenovo/Raj/chim_twitterClon/src/assets/baby.jpg'}} />
                <Body>
                  <Text>Rohit Sharma @ImRo45</Text>
                  <Text note>Merry Christmas and Happy NewYear to Everyone</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://pbs.twimg.com/media/DR1Tp1bVAAEOmgI.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>55 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>8Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>21h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
