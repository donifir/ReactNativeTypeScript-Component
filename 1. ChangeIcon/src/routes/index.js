import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screen/welcomeScreen';

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}
