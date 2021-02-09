import * as React from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import firebase from 'firebase'
import db from '../config' 


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
      <View>
        <Text style = {'styles.component'} >
            Welcome to Factomania
        </Text>
        <TouchableOpacity
         style = {stlyes.loginScreen}
         placeholder = {'emailId'}
         >

        </TouchableOpacity>
        <TouchableOpacity 
        style = {styles.loginScreen}
        placeholder = {'password'}
        >

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
  },
});
