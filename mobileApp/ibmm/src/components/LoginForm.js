import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        TextInput,
        TouchableOpacity,
        Button
 } from 'react-native';
 
 import { createAppContainer } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack'
 import { AsyncStorage } from 'react-native'
 import { Actions } from 'react-native-router-flux';
 import {StackNavigator} from 'react-navigation';
 import { NavigationContainer } from '@react-navigation/native';
 import { useNavigation } from '@react-navigation/native';

 function construc(){
 return constructor(){

 this.state = {
  email : '',
  password : '',
  token: ''
}}}

function setEmail(email){
  state.email += email;
  console.log(state.email)
}

function setPass(password){
  state.password += password;
}

 function GoToButton({ screenName }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => 
                {
                onSubmit()
                if(goHS()){
                navigation.navigate(screenName)
              }
                else{
                  alert('its okay you got this :)')
              }
                }}>
                <Text style = {styles.buttonText}> Sign In </Text>
            </TouchableOpacity>

  );
}

async function fetcher(password, email){
  var self = this
  fetch('http://127.0.0.1:8000/auth/token/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'password': password,
    'email': email
  })})
  .then((response) => response.json())
  .then((json) =>{
    self.setState({
      token: json.auth_token,
      });
    console.log(self.state.token)
    })
  .catch((error) => {
    console.error(error);
  })
}

async function onSubmit() { 
  try{
    console.log("FUCK")
    this.fetcher(state.password, state.email)
    console.log(":(")
    AsyncStorage.setItem('token', JSON.stringify(state.token).then(val => {
      console.log(val)
    }))
  } 
  catch(err){
    console.log(err)
  }
}

function goHS() {
  AsyncStorage.getItem('token').then(val =>{if (val != null)
    {return true
    console.log("WORK")}
    else{
      false
    }})}



 export default class LoginForm extends React.Component<{}>{
  constructor(props){
    super(props);
  } 
      //goHS = async () => {
          //Actions.HP() 
      //}

      getData = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
          const email = await AsyncStorage.getItem('email');
          if (value !== null) {
            this.setState({token : value})
            console.log(value)
          }
          if (email  !== null) {
            this.setState({email : email})
            console.log(email)
          }
        } catch (error) {
          // Error retrieving data
        }
      };

  render(){
      return(
        <View style = {styles.container}>
            <Text>{state.token}</Text>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor="#ffffff"
                autoCapitalize = 'none'
                onChangeText={email => setEmail(email)}
                value = {state.email}/>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff"
                autoCapitalize = 'none'
                onChangeText={password => setPass(password)}
                value = {state.password}
                />
                <GoToButton screenName="HP" />
            
        </View>
      )
                }
  }
////await this.onSubmit()

  const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    inputBox:{
       width: 300,
       height: 40,
       backgroundColor: 'rgba(255,255,255,0.3)',
       borderRadius: 25,
       paddingHorizontal: 12,
       fontSize: 16,
       color: '#ffffff',
       marginVertical: 10
    },
    button:{
      width: 300,
      backgroundColor: '#66bb6a',//#b61826 #26c6da
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