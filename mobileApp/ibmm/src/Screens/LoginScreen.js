import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        StatusBar,
 } from 'react-native';

 import Logo from '../components/Logo';
 import LoginForm from '../components/LoginForm';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';



 


 export default class LoginScreen extends React.Component<{}>{

    signup(navigation){
      navigation.navigate('SU')
    }

   render(){
     return(
       <View style = {styles.container}>
         <Logo/>
         <LoginForm type = "Login"/>
         <View style = {styles.signupTextCont}>
            <Text style = {styles.signupText}> Don't have an account yet?</Text>
            <TouchableOpacity onPress={
              this.signup(this.props.navigation)}>
              <Text style = {styles.signupButton}> Sign Up</Text>
              </TouchableOpacity>
         </View>
       </View> 
     )
   }
 }

 const styles = StyleSheet.create({
  container:{
      backgroundColor: '#ef5350',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  signupTextCont:{
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 16,
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupButton:{
    color: "#ffffff",
    fontSize: 16,
    fontWeight: '500'
  },
  signupText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16
  }
})