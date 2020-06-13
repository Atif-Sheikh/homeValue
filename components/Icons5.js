import Icon from 'react-native-vector-icons/FontAwesome5';

import React from 'react'
import { View, Text } from 'react-native'

const Icons5 = (props) => {
    return (
        <Icon  
        name = {props.name} 
        size = {props.size} 
        color = {
            props.color ? 
            props.color : 
            '#000000'
        }
        />
    )
}

export default Icons5
