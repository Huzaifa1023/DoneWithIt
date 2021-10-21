import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
const Icon = ({
    name,
    size=40,
    backgroundColor=colors.black,
    iconColor=colors.white
}) => {
    return (
        <View style={{
            backgroundColor:backgroundColor,
            width:size,
            height:size,
            borderRadius:size / 2,
            justifyContent:"center",
            alignItems:"center"
            }}>
        <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}/>
        </View>
    )
}

export default Icon

