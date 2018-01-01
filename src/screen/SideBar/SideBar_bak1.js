import React from "react";
import { Image, StatusBar, Settings } from "react-native";
import {
  Header,
  Footer,
  FooterTab,
  Left,
  Right,
  Card,CardItem,
  Text,Body,
  Container,
  Thumbnail,
  List,
  ListItem,
  Content,
  Button,
  View,
  Icon
} from "native-base";

//route name and icon as needs to be shown on the side bar 
const routes = [{name: "Profile",icon: 'contact'},{name: "Lists", icon: 'list-box'},{name: "Moments",icon: 'thunderstorm'}, {name: 'Highlights',icon:'pricetags'} ];
let userdetails='';

export default class SideBar extends React.Component {
 
  constructor() {
    super();
    
    //hardcoding userdetails info as json
    userdetails = {
          username: 'Rajeswary',
          userid: '@lraji123',
          following: 10,
          followers: 30,
          thumbnail: '../../assets/images/tree.jpg',
        };
        console.log(userdetails + 'user');

  }

  render() {

    //destructuring user info from prop
    const {username, userid,thumbnail,following,followers} = userdetails;
    console.log(username);
    return (
      <Container>
        <Content>
        <Card>
            <CardItem >
            <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
              
              <Thumbnail source={require('C:/Users/Lenovo/Raj/src/assets/images/butterfly.jpg')} />
              <Text style={{fontWeight: 'bold'}}>{username}</Text>
              <Text note>{userid}</Text>
                  
              
              <View style = {{flexDirection: 'row'}} >
                <Text>{following} Following </Text>
                <Text >{followers} Followers</Text>
              </View>
            </View>
            </CardItem>
           
        
          <CardItem style={{elevation: 2,borderBottomWidth: 4,borderTopWidth: 4}}>

          {/* Show list of routes and its icon, and navigate to the route when pressed */}
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button noborder
                  onPress={() => this.props.navigation.navigate(data.name)}
                  icon
                  
                >
                <Left>
                <Icon name={data.icon}/>
                {/* <Icon name="plane" /> */}
              </Left>
              <Body>
              <Text>{data.name}</Text>
              </Body>
              <Right/>
                
                  
                </ListItem>
              );
            }}
          />
          </CardItem>
          <CardItem >
            <List>
              <ListItem>
                  <Text>Settings and Privacy</Text>               
              </ListItem>
              <ListItem>
                  <Text>Help Center</Text>               
              </ListItem>
            </List>
          </CardItem>
          </Card>
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
        </Content>
      </Container>
    );
  }
}

