import React from "react";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

export default [
    {
        name: 'Home',
        component: Home,
        options: ({ navigation }) => ({ // if options is a function it automatically gets the `navigation` prop
            headerTitle: () => <Header title="Home" navigation={navigation} />,
        })
    },
    {
        name: 'Review Details',
        component: ReviewDetails,
        options: {
            headerTintColor: '#ffffff',
        }
    }
]