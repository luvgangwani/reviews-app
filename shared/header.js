import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function Header({ navigation, title }) {

    const openMenu = () => { navigation.openDrawer(); }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name="menu" style={styles.icon} onPress={openMenu} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#184e77',
    },

    headerText: {
        fontFamily: 'raleway-light',
        color: '#184e77',
        fontSize: 20,
        letterSpacing: 1,
    },

    icon: {
        position: 'absolute',
        left: 12,
        fontFamily: 'raleway-light',
        color: '#184e77',
        fontSize: 28,
    },

    headerTitle: {
        flexDirection: 'row',
    },

    headerImage: {
        width: 16,
        height: 16,
        marginHorizontal: 10,
        marginTop: 10,
    }
})

