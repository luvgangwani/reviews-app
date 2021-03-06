import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function Header({ navigation, title }) {

    const openMenu = () => { navigation.openDrawer(); }

    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" style={styles.icon} onPress={openMenu} />
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
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
        color: '#ffffff',
        fontSize: 20,
        letterSpacing: 1,
    },

    icon: {
        position: 'absolute',
        left: 12,
        fontFamily: 'raleway-light',
        color: '#ffffff',
        fontSize: 28,
    },
})

