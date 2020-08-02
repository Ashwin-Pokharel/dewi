import React, {Component, Fragment} from "react";
 import {
         Platform,
        StyleSheet,
        View,
        SafeAreaView,
        StatusBar, AsyncStorage, Button
 } from 'react-native';
 import { Header, Text } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
 import Logo from '../components/Logo';
 import HomeRoutes from '../HomeRoutes';
 import SignUpForm from '../components/SignUpForm';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from 'react-native-router-flux';
import {StackNavigator} from 'react-navigation';
 import { NavigationContainer } from '@react-navigation/native';
 import { useNavigation } from '@react-navigation/native';
 import { createDrawerNavigator } from '@react-navigation/drawer';


 const Drawer = createDrawerNavigator();
 
 export default class SignUp extends React.Component<{}>{
  constructor(props){
    super(props);
  }

  /*async router(){
    await AsyncStorage.getItem('name').then(val =>
      this.setState({name: val}))
    await AsyncStorage.getItem('name').then(val =>
      console.log(val))
  }*/

    async onLogout(navigation) { 
        try{
            await AsyncStorage.clear();
            AsyncStorage.getItem('token').then(val =>
            {console.log("TOKEN VAL: " +val)})
            navigation.push('LI')
          }
        catch(err){
          console.log(err)
        }
      }
      

   render(){
     return(
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text h3 > WELCOME </Text>
      <Button title="Open drawer" onPress={() => this.props.navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => this.props.navigation.toggleDrawer()} />
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