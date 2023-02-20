import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import AboutScreen from '../screen/AboutScreen';
import DummyScreen from '../screen/DummyScreen';
import NavBottom from '../component/NavBottom';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  AboutScreen: undefined;
  DummyScreen: undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();


const Navigation = () => {
  
  return (
    <RootStack.Navigator initialRouteName="AboutScreen" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="DummyScreen" component={DummyScreen} />
      <RootStack.Screen name="AboutScreen" component={AboutScreen} />
     
    </RootStack.Navigator>
  )
}

export default Navigation

