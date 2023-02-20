import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/homeScreen';
import CreateScreen from '../screen/createScreen';
import DetailScreen from '../screen/detailScreen';
import EditScreen from '../screen/editScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  CreateScreen: undefined;
  DetailScreen: { userId: string };
  EditScreen: { userId: string };
};

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <RootStack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="CreateScreen" component={CreateScreen} />
      <RootStack.Screen name="DetailScreen" component={DetailScreen} />
      <RootStack.Screen name="EditScreen" component={EditScreen} />
    </RootStack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})