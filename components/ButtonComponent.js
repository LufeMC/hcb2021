import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';

let pressed;
let notPressed;

export const ButtonComponent = (props) => {
    var [isPress, setIsPress] = React.useState(false);

    var touchProps = {
        // underlayColor: "white",
        onPress: () => changeIsPress(),
    };

    const changeIsPress = () => {
        setIsPress(!isPress)
        props.onPress()
        // setIsPress(!isPress)
    }

    return (
        <TouchableOpacity onPress={props.onPress ? props.onPress : null} style={props.buttonStyle}>
            <Text style={props.buttonTextStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });