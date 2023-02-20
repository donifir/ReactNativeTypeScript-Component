import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import TabNavigation from './src/navigation/TabNavigation';



const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
  )
}

export default App

//link aktive ada di dummy screen

