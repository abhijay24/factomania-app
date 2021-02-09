import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View stlye = {styles.container}>
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}>weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}>sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}>general knowledge</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}>chance</Text>
        </TouchableOpacity>        
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}>countries</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}>environment</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}>food</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}>weather</Text>
        </TouchableOpacity>

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
    button:{
      backgroundColor:'yellow',
      width:100,
      height:50,
      borderWidth:2,
      borderColour:'black',
      borderRadius:10,
      alignItems:'center',
      justifiedContent:'center'
    },
    buttonText:{
      fontSize: 20,
      fontWeight:'bold'
    }
  });
  