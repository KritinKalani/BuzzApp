import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Facebook extends React.Component{
    render(){
        return(
    <View>
<Text style = {this.styles}>Facebook</Text>
    </View>
        )
    }
    
}
var styles = StyleSheet.create({
    text:{
        fontFamily:'cursive',
        fontSize:20,
        alignSelf:'center'
    }
})