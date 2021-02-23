import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import * as Font from 'expo-font';
import Home from './screens/home';
import AppLoading from 'expo-app-loading';

const getFonts = () =>
  Font.loadAsync({
    'raleway-light': require('./assets/fonts/Raleway-Light.ttf'),
    'raleway-semibold': require('./assets/fonts/Raleway-SemiBold.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  let returnElement = <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />;

  if (fontsLoaded) 
    returnElement = <View>
                      <Home />
                      <StatusBar style="auto" />
                    </View>
  return returnElement;
}