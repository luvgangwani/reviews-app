import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Card from '../shared/card';
import globalStyles, { images } from '../styles/global';

export default function ReviewDetails({ route, navigation }) {
    const { title, rating, body } = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>Title: { title }</Text>
                <Text>Body: { body }</Text>
                <View style={styles.rating}>
                    <Text>Rating:</Text>
                    <Image source={images.rating[rating]}/>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#184e77',
    }
});
