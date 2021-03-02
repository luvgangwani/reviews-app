import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../../screens/about";

const { Navigator, Screen } = createStackNavigator();

const screenOptions = { headerStyle: { backgroundColor: '#184e77' }, headerTitleStyle: { fontFamily: 'raleway-light' }};
const options = { headerTintColor: '#ffffff' }; 

export default function AboutStack() {
    return (
        <Navigator screenOptions={screenOptions}>
            <Screen name="About" component={About} options={options} />
        </Navigator>
    );
}