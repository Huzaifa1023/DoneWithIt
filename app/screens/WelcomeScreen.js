import React from "react";
import { Image, ImageBackground, Platform, StatusBar, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
          <Text style={styles.logoTagLine}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title="Login"/>
          <AppButton title="Registor" color="secondary"/>
        </View>
      </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0 
    },
  background: {
      flex:1,
      justifyContent:"flex-end",
      alignItems:"center"
  },
  logoContainer:{
      alignItems:"center",
      position:"absolute",
      top:30,
  },
  logo:{
    width:100,
    height:100,
  },
  logoTagLine:{
    fontSize:30,
    marginVertical:10
  },    
  buttonsContainer:{
    width:"100%",
    paddingHorizontal:20,
  }
});
