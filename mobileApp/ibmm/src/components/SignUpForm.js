import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        TextInput,
        TouchableOpacity
 } from 'react-native';
 
 export default class SignUpForm extends React.Component<{}>{
    render(){
      return(
        <View style = {styles.container}>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="First Name"
                placeholderTextColor="#ffffff"/>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Last Name"
                placeholderTextColor="#ffffff"/>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor="#ffffff"/>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Phone Number"
                placeholderTextColor="#ffffff"/>
            <TouchableOpacity style={styles.button}>
                <Text style = {styles.buttonText}> Sign In </Text>
            </TouchableOpacity>
        </View>
      )
    }
  }


  const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    inputBox:{
       width: 300,
       height: 40,
       backgroundColor: 'rgba(255,255,255,0.3)',
       borderRadius: 25,
       paddingHorizontal: 16,
       fontSize: 16,
       color: '#ffffff',
       marginVertical: 10
    },
    button:{
      width: 300,
      backgroundColor: '#26c6da', //#b61826 #26c6da
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 12

    },
    buttonText:{
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
  }
  })