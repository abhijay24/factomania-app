import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
//screen imports
import LoginScreen from './screens/LoginScreen'
import SplashScreen from './screens/splashScreen'
//creating screen stacks
const MainNavigator = createStackNavigator({
  SplashScreen: SplashScreen,
  LoginScreen:LoginScreen
})

class App extends React.Component{
  render(){
    return <MainNavigator/>
  }
} 

const AppContainer = createAppContainer(MainNavigator)

export default AppContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
