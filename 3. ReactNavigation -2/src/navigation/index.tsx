import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/homeScreen';
import AboutScreen from '../screen/aboutScreen';
import ProductScreen from '../screen/productScreen';
import DetailProduckScreen from '../screen/detailProductScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  AboutScreen: undefined;
  ProductScreen: undefined;
  DetailProductScreen: {
    name:string
  };
};

const Navigation = () => {
  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator initialRouteName="HomeScreen">
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="AboutScreen" component={AboutScreen} />
      <RootStack.Screen name="ProductScreen" component={ProductScreen} />
      <RootStack.Screen name="DetailProductScreen" component={DetailProduckScreen} />
    </RootStack.Navigator>

  )
}

export default Navigation

const styles = StyleSheet.create({})