import React from 'react';
import WelcomeScreen from '../screen/WelcomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabHomeScreen from '../screen/TabHomeScreen';
import TabAboutScreen from '../screen/TabAboutScreen';
import AboutScreen from '../screen/AboutScreen';

export type RootStackParamList = {
  AboutScreen: undefined;
  HomeScreen: undefined;
  TabHomeScreen: undefined;
  TabAboutScreen: undefined;
  WelcomeScreen: undefined;
};

const Navigation = () => {
  const RootStack = createStackNavigator<RootStackParamList>();
  return (
    <RootStack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="WelcomeScreen" component={TabNavigation} />
      <RootStack.Screen name="AboutScreen" component={AboutScreen} />
    </RootStack.Navigator>
  );
};

export const TabNavigation=()=>{
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
        <Tab.Screen name="TabHomeScreen" component={TabHomeScreen} />
        <Tab.Screen name="TabAboutScreen" component={TabAboutScreen} />
      </Tab.Navigator>
  )
}

export default Navigation;
