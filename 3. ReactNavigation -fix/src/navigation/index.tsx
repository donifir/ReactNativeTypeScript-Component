import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/homeScreen';
import AboutScreen from '../screen/about';
import UserPropScreen from '../screen/userProp';

export type RootStackParamList = {
  HomeScreen: undefined;
  AboutScreen: undefined;
  UserPropScreen: { userId: string };
};

const Navigation = () => {
  const RootStack = createStackNavigator<RootStackParamList>();
  return (
    <RootStack.Navigator initialRouteName="HomeScreen">
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      
      <RootStack.Screen name="AboutScreen" component={AboutScreen} />
      <RootStack.Screen name="UserPropScreen" component={UserPropScreen} />
    </RootStack.Navigator>
  )
}

export default Navigation

