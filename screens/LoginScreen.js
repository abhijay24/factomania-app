import * as React from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import firebase from 'firebase'
import db from '../config' 
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';


export default class LoginScreen extends React.Component{
  static navigationOptions = ()=>({
    title:'LoginScreen',
    headerStyle:{
      backgroundColor:'#fd0759'
    },
    headerTintColor:'#fff'
  })
  constructor(){
      super()
      this.state = {
          password: ' ',
          emailId: ' '          
      }
      }

      userLogin=(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            return Alert.alert('successfully logged in')
        })
        .catch(error =>{
            var errorMessage = error.errorMessage
            var errorCode = error.code
            Alert.alert(errorCode)
        })      
        
      }
    render(){

    return(
      <View style = {styles.container}>

        <Text style = {styles.component} >
            Welcome to Factomania
        </Text>
        <TextInput
         style = {styles.loginScreen}
         placeholder = {'emailId'}
         />
        
        <TextInput
        style = {styles.loginScreen}
        placeholder = {'password'}
        />
        <TouchableOpacity style = {styles.signupbutton}>
        <Text>  SIGN UP HERE  </Text>
        this.props.navigation.navigate('SignUp')
        </TouchableOpacity>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'light blue'
  },
  loginScreen: {
    width: 200 ,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  component:{
    fontSize:30,
    color:'red' ,
    fontWeight:'bold'
  }
});
