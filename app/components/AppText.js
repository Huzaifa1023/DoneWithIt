import React from 'react'
import {  Text} from 'react-native'
import defaultStyle from '../config/styles';
import colors from '../config/colors'

export default function AppText({style,children, color="black", size=20, ...otherProps}) {
    return (
            <Text style={[defaultStyle.text,{color:colors[color],fontSize:size},style]}{...otherProps}>{children}</Text>
    )
}
