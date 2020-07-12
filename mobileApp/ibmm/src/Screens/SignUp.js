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
 import SignUpForm from '../components/SignUpForm';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from 'react-native-router-flux';

 
 export default class SignUp extends React.Component<{}>{
  signin(){
    Actions.LI()
  }
   render(){
     return(
       <View style = {styles.container}>
         <Logo/>
         <SignUpForm type = "Sign Up"/>
         <View style = {styles.signupTextCont}>
            <Text style = {styles.signupText}> Already have an account?</Text>
           <TouchableOpacity onPress = {this.signin}> 
              <Text style = {styles.signupButton}> Sign up</Text>
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