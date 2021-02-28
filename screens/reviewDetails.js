import React from 'react';
import { Button, Text, View } from 'react-native';
import globalStyles from '../styles/global';

export default function ReviewDetails({ route, navigation }) {
    const { title, rating, body } = route.params;
    return (
        <View style={globalStyles.container}>
            <Text>Title: { title }</Text>
            <Text>Rating: { rating }</Text>
            <Text>Body: { body }</Text>
        </View>
    );
};
