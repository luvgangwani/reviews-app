import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from '../styles/global';

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        {title: 'Fast and Furious' , rating: '2', body: 'Lorem ipsum', key: '1'},
        {title: '2 Fast 2 Furious' , rating: '5', body: 'Lorem ipsum', key: '2'},
        {title: 'Fast and Furious: Tokyo Drift' , rating: '3', body: 'Lorem ipsum', key: '3'},
        {title: 'Fast and Furious 4' , rating: '4', body: 'Lorem ipsum', key: '4'},
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review Details', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};