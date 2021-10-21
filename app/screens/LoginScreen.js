import React from 'react'
import { Image, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton'
const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon='email'
            keyboardType="email-address"
            placeholder="Email"
            />
            <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon='lock'
            placeholder="Password"
            secureTextEntry
            />
            <AppButton title="Login"/>
        </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    logo:{
        width:70,
        height:70,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20,
    }
})
