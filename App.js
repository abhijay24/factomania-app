import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
//screen imports
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpSceen';
import SplashScreen from './screens/splashScreen'

class App extends React.Component{
  render(){
    return <AppContainer/>
  }
} 


var switchNavigator = createSwitchNavigator({
  Welcome: {screen:HomeScreen},
  SignUp: {screen:SignUpScreen}
})


const AppContainer = createAppContainer(switchNavigator)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
