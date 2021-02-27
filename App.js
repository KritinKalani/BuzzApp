
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';
import Facebook from './Facebook';
import Instagram from './Instagram';
import {createBottomTabNavigator} from 'react-native-tabs';
import {createAppContainer} from 'react-navigation';
import { render } from 'react-dom';

export default function App() {
  return (
    <View>
      <Header
    backgroundColor={'#9c8210'}
    centerComponent = {{text: 'BuzzApp'}}
/>
   <AppContainer/> 
   </View>
  )
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen: Facebook},
  Instagram:{screen: Instagram}
})

const AppContainer = createAppContainer(TabNavigator)

var styles = StyleSheet.create({
  
});
