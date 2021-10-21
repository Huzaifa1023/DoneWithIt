import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import AppText from './AppText'

const PickerItem = ({label,onPress}) => {
    return (
        <TouchableHighlight onPress={onPress}>
        <View style={styles.conatiner}>
            <AppText>{label}</AppText>
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
