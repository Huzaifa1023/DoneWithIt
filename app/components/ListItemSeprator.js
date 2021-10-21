import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'

const ListItemSeprator = () => {
    return (
        <View style={styles.seprator}/>
    )
}

export default ListItemSeprator

const styles = StyleSheet.create({
    seprator:{
        width:"100%",
        height:1,
        backgroundColor:colors.light
    }
})
