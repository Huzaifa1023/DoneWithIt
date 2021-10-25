import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors';
import defaultStyles from '../config/styles';
const AppTextInput = ({icon,width="100%" , ...otherPros}) => {
    return (
        <View style={[styles.container,{width:width}]}>
            {icon && <MaterialCommunityIcons name={icon} color={colors.medium} size={25} style={styles.icon}/>}
            <TextInput {...otherPros} style={defaultStyles.text} placeholderTextColor={colors.medium}/> 
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        borderRadius:25,
        backgroundColor:colors.light,
        marginVertical:10,
        padding:15,
    },
    icon:{
        marginRight:10
    }
})
