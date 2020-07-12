import React, {Component, Fragment} from "react";
import {
        Platform,
       StyleSheet,
       Text,
       View,
       SafeAreaView,
       StatusBar,
} from 'react-native';

export class SULStudent extends React.Component<{}>{
    render(){
        return(
            <View style = {styles.container}>
                <StatusBar backgroundColor="pink" barStyle="light-content" />
                <Text style = {{color: '#ffffff', fontSize: 18}}>PEEPOPP</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ff8a65',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }


})
