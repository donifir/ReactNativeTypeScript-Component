import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Create from '../screen/Create';
import Detail from '../screen/Detail';
import Edit from '../screen/Edit';
export type RootStackParamList = {
  Home: undefined;
  Create: undefined;
  Detail: { userId: string };
  Edit: { userId: string };
};

const RootStack = createStackNavigator<RootStackParamList>();

const NavigationRoot = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Create" component={Create} />
      <RootStack.Screen name="Detail" component={Detail} />
      <RootStack.Screen name="Edit" component={Edit} />
    </RootStack.Navigator>
  );
};

export default NavigationRoot;
