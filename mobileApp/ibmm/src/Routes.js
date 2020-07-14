import React, {Component} from 'react';

import LoginScreen from './Screens/LoginScreen';
import SignUp from './Screens/SignUp';
import HomePage from './Screens/HomePage';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackNavigator} from 'react-navigation';


const Stack = createStackNavigator()

export default class Routes extends Component<{}> {
    
    async checkInit1(){
        console.log('WORKING')
        await ((AsyncStorage.getItem('token').then(val =>{
            console.log("value " + val)
        if (val == null){
            console.log(1)
            return true}
        else{
            console.log(0)
            return false}
        }
        )))
    }

    render(){
        return(
            <NavigationContainer>
            <Stack.Navigator initialRouteName="LI">
            {this.checkInit1() ? ( <>
              <Stack.Screen name="LI" component={LoginScreen}/>
              <Stack.Screen name="SU" component={SignUp} /> 
              <Stack.Screen name="HP" component={HomePage}/>
              </>
            ) : (
              <Stack.Screen name="HP" component={HomePage} />
            )}
          </Stack.Navigator>
          </NavigationContainer>
        )
    }
}


//((AsyncStorage.getItem('token').then(val =>{if (val == null 
//|| val == undefined 
//|| val ==''){return true}})))

//((AsyncStorage.getItem('token').then(val =>{if (val != null 
//|| val != undefined 
//|| val !=''){return true}})))