import React from "react";
import { View, StyleSheet } from "react-native";

export default function Card({ children }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { children }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 5,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#184e77',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginHorizontal: 4,
        marginVertical: 6,
    },

    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    },
});