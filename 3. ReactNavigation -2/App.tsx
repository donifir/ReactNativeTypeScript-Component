import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation/> 
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})