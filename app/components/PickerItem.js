import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

const PickerItem = ({item,onPress}) => {
    return (
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.conatiner}>
            <AppText>{item.label}</AppText>
        </View>
        </TouchableHighlight>
    )
}

export default PickerItem

const styles = StyleSheet.create({
    conatiner:{
        padding:20,
    }
})
