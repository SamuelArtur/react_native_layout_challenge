import React from 'react';
import { StyleSheet, Text, TouchableHighlight, Dimensions } from 'react-native';

export default props => {

    const buttonStyles = [styles.button]

    if (props.doubled) buttonStyles.push(styles.buttonDoubled)
    
    if (props.operator) buttonStyles.push(styles.buttonOperator)
    
    if (props.ac) buttonStyles.push(styles.buttonAC)

    return (
        <TouchableHighlight
            onPress={props.onClick}
        >
            <Text style={buttonStyles}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#e8e7ea',
        color: '#000000',
        borderWidth: 1,
        borderColor: '#aaaaaa',
        textAlign: 'center',
    },
    buttonOperator: {
        backgroundColor: '#ff9f53',
        color: '#ffffff'
    },
    buttonAC: {
        width: Dimensions.get('window').width / 1.333333333333,
    },
    buttonDoubled: {
        width: Dimensions.get('window').width / 2,
    }
})