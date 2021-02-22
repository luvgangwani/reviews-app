import React from 'react';
import { StatusBar, View } from 'react-native';
import Home from './screens/home';

export default function App() {
  return (
    <View>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}