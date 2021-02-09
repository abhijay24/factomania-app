import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class SplashScreen extends React.Component{
    constructor(){
        super()
      setTimeout(()=>{
          this.props.navigation.navigate('LoginScreen')
      },4000)
    }
    render(){
    return(
      <View>
        <Image
        style = {{width:100, height:100, alignSelf: 'center', marginTop: 20}}
        source = {require('../assets/facts.jpg')}
        />
      </View>
    )
  }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  