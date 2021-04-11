import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function FlatButton({ text, onPress }) {
    const { button, buttonText } = styles;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={button}>
                <Text style={buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#184e77',
        borderRadius: 5,
        padding: 15,
    },
    buttonText: {
        color: '#ffffff',
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});