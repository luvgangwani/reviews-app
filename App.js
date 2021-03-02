import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Drawer from './navigation/drawer';


// get the Navigator and Screen component from the Stack Navigator

const getFonts = () =>
  Font.loadAsync({
    'raleway-light': require('./assets/fonts/Raleway-Light.ttf'),
    'raleway-semibold': require('./assets/fonts/Raleway-SemiBold.ttf')
  });

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  let returnElement = <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />;

  if (fontsLoaded) returnElement = <Drawer />;
  return returnElement;
}