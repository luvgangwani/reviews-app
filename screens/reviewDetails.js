import React from 'react';
import { Button, Text, View } from 'react-native';
import globalStyles from '../styles/global';

export default function ReviewDetails({ navigation }) {
    
    const goBackHome = () => navigation.goBack();

    return (
        <View style={globalStyles.container}>
            <Text>Review details screen</Text>
            <Button title='Go back home' onPress={goBackHome} />
        </View>
    );
};
