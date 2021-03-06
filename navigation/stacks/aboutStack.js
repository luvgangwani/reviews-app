import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../../screens/about";
import Header from "../../shared/header";

const { Navigator, Screen } = createStackNavigator();

const screenOptions = { headerStyle: { backgroundColor: '#184e77' }, headerTitleStyle: { fontFamily: 'raleway-light' }};
const options = ({ navigation }) => ({ 
    headerTitle: () => <Header title="About" navigation={navigation} />,
}); 

export default function AboutStack() {
    return (
        <Navigator screenOptions={screenOptions}>
            <Screen name="About" component={About} options={options} />
        </Navigator>
    );
}