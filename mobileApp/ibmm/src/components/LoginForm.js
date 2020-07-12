import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        TextInput,
        TouchableOpacity,
 } from 'react-native';
 
 import { createAppContainer } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack'
 import { AsyncStorage } from 'react-native'
 import { Actions } from 'react-native-router-flux';


 export default class LoginForm extends React.Component<{}>{
  constructor(props){
    super(props);
    this.state = {
        email : '',
        password : '',
        token: ''
    }
    this.getData();
  }

    async fetcher(password, email){
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

    onSubmit = async () => { 
        try{
          this.fetcher(this.state.password, this.state.email)
          await AsyncStorage.setItem('token', this.state.token)
          await AsyncStorage.setItem('email', this.state.email)
          await this.goHS()
        } 
        catch(err){
          console.log(err)
        }
      }

      async goHS() {
        if(this.state.token != null || this.state.token != ''){
          Actions.HP()
        }
        else{
          alert('STUPID!')
        }
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
            <Text>{this.state.token}</Text>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor="#ffffff"
                autoCapitalize = 'none'
                onChangeText={email => this.setState({ email})}
                value = {this.state.email}/>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff"
                autoCapitalize = 'none'
                onChangeText={password => this.setState({ password})}
                value = {this.state.password}
                />
            <TouchableOpacity style={styles.button} 
                onPress = {
                  this.onSubmit}
                  
                  //set dict values for user and pass
              //fetch call to puth user and pass and get token
              //if json.token is undefined then prompt them that the
                //}
                >
                <Text style = {styles.buttonText}> Login </Text>
            </TouchableOpacity>
        </View>
      )
                }
  }


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