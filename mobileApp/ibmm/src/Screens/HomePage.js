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
   render(){
     return(
       <View style = {styles.container}>
         <Text>HIIIIIIII!!!!</Text>
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
    }
})