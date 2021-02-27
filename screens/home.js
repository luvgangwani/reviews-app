import React from 'react';
import { Button, Text, View } from 'react-native';
import globalStyles from '../styles/global';

export default function Home({ navigation }) {

    const pressHandler = () => navigation.navigate('Review Details');

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
            <Button title="Go to review details" onPress={pressHandler} />
        </View>
    );
};