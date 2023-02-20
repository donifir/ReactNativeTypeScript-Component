import React from 'react';
import WelcomeScreen from '../screen/WelcomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

export default function Navigation() {
  type RootStackParamList = {
    AboutScreen: undefined;
    HomeScreen: undefined;
    TabHomeScreen: undefined;
    TabAboutScreen: undefined;
    WelcomeScreen: undefined;
  };
  const RootStack = createStackNavigator<RootStackParamList>();
  return (
    <RootStack.Navigator initialRouteName="WelcomeScreen">
      <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </RootStack.Navigator>
  );
}

