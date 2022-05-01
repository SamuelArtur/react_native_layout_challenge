import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ColorPropType } from 'react-native';

export default props => {
    return (
        <View style={styles.display}>
            <Text
                style={styles.displayOperationText}
                numberOfLines={1}
            >{props.operation}
            </Text>
            <Text
                style={styles.displayResultText}
                numberOfLines={1}
            >{props.result}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#747474',
        width: '100%'
    },
    displayResultText: {
        fontSize: 50,
        color: '#fff'
    },
    displayOperationText: {
        fontSize: 25,
        color: '#fff'
    }
})