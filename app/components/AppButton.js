import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors'

const AppButton = ({onPress,title, color="primary"}) => {
    return (
        <TouchableOpacity style={[styles.btnContainer,{backgroundColor:colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    btnContainer:{
        borderRadius:50,
        height:50,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.primary,
        marginVertical:10
    },
    text:{
        color:colors.white,
        fontSize:20,
    }
})
