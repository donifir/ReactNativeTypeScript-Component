import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import AboutScreen from '../screen/AboutScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DummyScreen from '../screen/DummyScreen';
import Navigation from './Navigation';
import IconTabComponent from '../component/IconTabComponent';
// import IconComponent from '../component/iconCOmponent';

export type RootStackParamList = {
  AboutScreen: undefined;
  HomeScreen: undefined;
  DummyScreen: undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();

const TabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <Tab.Navigator 
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarLabel: 'Home Screen'}}
        />
        <Tab.Screen name="AboutScreen" component={Navigation} />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
