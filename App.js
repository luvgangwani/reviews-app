import React, { useState } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';
import AppLoading from 'expo-app-loading';

// get the Navigator and Screen component from the Stack Navigator

const { Navigator, Screen } = createStackNavigator();

const getFonts = () =>
  Font.loadAsync({
    'raleway-light': require('./assets/fonts/Raleway-Light.ttf'),
    'raleway-semibold': require('./assets/fonts/Raleway-SemiBold.ttf')
  });

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  let returnElement = <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />;

  if (fontsLoaded) 
    returnElement = <NavigationContainer>
                      <Navigator initialRouteName="Home">
                        <Screen name="Home" component={Home} />
                        <Screen name="Review Details" component={ReviewDetails} />
                      </Navigator>
                    </NavigationContainer>
  return returnElement;
}