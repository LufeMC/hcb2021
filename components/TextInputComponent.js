import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput, TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

let pressed;
let notPressed;

export const TextInputComponent = (props) => {
    const inputProps = {
        style: [styles.input, props.inputStyle],
        onChangeText: (text) => props.onChangeText(text),
        placeholder: props.placeholder,
        keyboardType: props.keyboardType,
        secureTextEntry: props.secureTextEntry
    };


    return (
        <View style={[props.style, styles.container]}>
            {props.childrenBefore}
            <TextInput {...inputProps} />
            {props.childrenAfter}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 5
    },
    input: {
        borderRadius: 7,
        paddingBottom: 10,
        paddingTop: 10,
        paddingStart: 20,
        paddingEnd: 20,
        width: "100%",
    },
})