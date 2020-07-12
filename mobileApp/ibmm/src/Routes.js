import React, {Component} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import LoginScreen from './Screens/LoginScreen';
import SignUp from './Screens/SignUp';
import HomePage from './Screens/HomePage';
import { AsyncStorage } from 'react-native';




export default class Routes extends Component<{}> {
    

    render(){
        return(
            <Router>
                <Stack key = "root" hideNavBar={true}>
                    <Scene key = "LI" component={LoginScreen} title = "LoginScreen" initial={((AsyncStorage.getItem('token') == null))}/>
                    <Scene key = "SU" component={SignUp} title = "SignUp"/>
                    <Scene key = "HP" component={HomePage} title = "HomeScreen" initial = {((AsyncStorage.getItem('token') != null))}/>
                </Stack>
            </Router>
        )
    }
}