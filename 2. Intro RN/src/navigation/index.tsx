import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screen/welcomeScreen';
import IntroScreen from '../screen/introScreen';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  IntroScreen: undefined;
  Intro2: undefined;
  Intro3: undefined;
};

const Navigation = () => {
  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator initialRouteName="IntroScreen" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <RootStack.Screen name="IntroScreen" component={IntroScreen} />
    </RootStack.Navigator>

  )
}

export default Navigation

