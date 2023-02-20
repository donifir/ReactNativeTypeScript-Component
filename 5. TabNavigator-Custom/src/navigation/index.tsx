import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import AboutScreen from '../screen/AboutScreen';
import SubHomeScreen from '../screen/SubHomeScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  SubHomeScreen: undefined;
};

const Navigation = () => {
  const RootStack = createStackNavigator<RootStackParamList>();
  return (
    <RootStack.Navigator initialRouteName="HomeScreen">
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="SubHomeScreen" component={SubHomeScreen} />
    </RootStack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
