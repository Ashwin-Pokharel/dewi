import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        Text,
        View,
        SafeAreaView,
        StatusBar, AsyncStorage
 } from 'react-native';

 import Logo from '../components/Logo';
 import SignUpForm from '../components/SignUpForm';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from 'react-native-router-flux';
import {StackNavigator} from 'react-navigation';
 import { NavigationContainer } from '@react-navigation/native';
 import { useNavigation } from '@react-navigation/native';


 
 export default class SignUp extends React.Component<{}>{

    async onLogout(navigation) { 
        try{
            await AsyncStorage.clear()}
        catch(err){
          console.log(err)
        }
          navigation.navigate('LI')
      }

      static navigationOptions = {
        headerLeft : null
      };

   //async goHS() {
        //if(this.state.token != null || this.state.token != ''){
          //Actions.HP()
        //}
        //else{
          //alert('STUPID!')
        //}
      //}
      

   render(){
     return(
       <View style = {styles.container}>
         <Text>HIIIIIIII!!!!</Text>
         <TouchableOpacity style={styles.button} 
                onPress = { async () =>
                  {await this.onLogout(this.props.navigation)}}
                >
                <Text style = {styles.buttonText}> Logout </Text>
            </TouchableOpacity>
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
    button:{
        width: 300,
        backgroundColor: '#66bb6a',//#b61826 #26c6da
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
      }
})