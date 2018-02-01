import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image} from "react-native";
//import { StackNavigator } from "react-navigation";
export default class Success extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    headerLeft: null
  };
  render() {
    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop: 150}}>
      <Image style={{height: 200, width: 200}} source={{uri:'https://hasura.io/rstatic/resources/logo/Hasura-face-new.png'}} />
      <View style={{flex:2, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontSize: 25}}>Successfully Logged In</Text></View></View>);
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent("Success", () => Success);
