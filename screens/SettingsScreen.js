import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class SettingsScreen extends React.Component{
  render(){
    return(
      <View>
        <TouchableOpacity 
        style = {styles.textbutton}>
          <Text> Dark Theme </Text>
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
});
