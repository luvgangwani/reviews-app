import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./stacks/homeStack";
import AboutStack from "./stacks/aboutStack";

const { Navigator, Screen } = createDrawerNavigator();

export default function Drawer() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="HomeStack">
                <Screen name="Home" component={HomeStack} />
                <Screen name="About" component={AboutStack} />
            </Navigator>
        </NavigationContainer>
    );
}