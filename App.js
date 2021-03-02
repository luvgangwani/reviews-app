import React, { useState } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from 'expo-app-loading';
import routes from './routes/routes';

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
                      <Navigator initialRouteName="Home" screenOptions= {{ headerStyle: { backgroundColor: '#184e77' }, headerTitleStyle: { fontFamily: 'raleway-light' }}}>
                        {
                          routes.map((route, index) => <Screen key={index} {...route} options={{ headerTintColor: '#ffffff' }} />)
                        }
                      </Navigator>
                    </NavigationContainer>
  return returnElement;
}