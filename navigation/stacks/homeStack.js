import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import routes from '../routes';

const { Navigator, Screen } = createStackNavigator();

const screenOptions = { headerStyle: { backgroundColor: '#184e77' }, headerTitleStyle: { fontFamily: 'raleway-light' }};
const options = { headerTintColor: '#ffffff' }; 

export default function HomeStack() {
    return (
        <Navigator initialRouteName="Home" screenOptions= {screenOptions}>
        {
            routes.map((route, index) => <Screen key={index} {...route} options={options} />)
        }
        </Navigator>
    );
}