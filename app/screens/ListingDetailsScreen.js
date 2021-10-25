import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function ListingDetailsScreen({image,title,subtitle}) {
    return (
        <View style={styles.contaier}>
            <Image style={styles.image} source={image}/>
            <View style={styles.textContainer}>
                <AppText style={styles.title} size={25}>{title}</AppText>
                <AppText color={colors.secondary}>{subtitle}</AppText>
            </View>
            <ListItem image={require('../assets/user.jpg')} title="John Doe" subTitle="5 Listenings"/>
        </View>
    )
}

const styles = StyleSheet.create({
    contaier:{
        width:"100%"
    },
    image:{
        width:"100%",
        height:200,
    },
    textContainer:{
        padding:20
    },
    title:{
        fontWeight:"600",
        textTransform:"capitalize"
    }
})
