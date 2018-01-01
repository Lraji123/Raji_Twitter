import React, { Component } from 'react';
import { Image,Text,view } from 'react-native';
import {TabNavigator } from "react-navigation";
import search from './src/Tabs/search';
import TwitterTimeline from './src/Tabs/TwitterTimeline';
import HomeScreen from './src/Tabs/HomeScreen';

var MainScreenNavigator=TabNavigator({
  Home:{screen:HomeScreen},
  Timeline: {screen:TwitterTimeline},
  Search: {screen:search}
  },
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions:{
    activeTintColor:'#e91e63',
  }
});

export default MainScreenNavigator;