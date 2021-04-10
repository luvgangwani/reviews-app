import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, Modal, StyleSheet } from 'react-native';
import Card from '../shared/card';
import globalStyles from '../styles/global';
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    const [modalToggle, setModalToggle] = useState(false);
    const [reviews, setReviews] = useState([
        {title: 'Fast and Furious' , rating: '2', body: 'Lorem ipsum', key: '1'},
        {title: '2 Fast 2 Furious' , rating: '5', body: 'Lorem ipsum', key: '2'},
        {title: 'Fast and Furious: Tokyo Drift' , rating: '3', body: 'Lorem ipsum', key: '3'},
        {title: 'Fast and Furious 4' , rating: '4', body: 'Lorem ipsum', key: '4'},
    ]);

    return (
        <View style={globalStyles.container}>
            <Modal animationType='slide' visible={modalToggle} style={styles.modalContent}>
                <MaterialIcons name="close" size={24} style={styles.icon} onPress={() => setModalToggle(false)} />
                <ReviewForm />
            </Modal>
            <MaterialIcons name="add" size={24} style={styles.icon} onPress={() => setModalToggle(true)} />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review Details', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#184e77',
        borderRadius: 5,
        padding: 10,
        alignSelf: 'center',
    },
    modalContent: {
        flex: 1,
    }
})