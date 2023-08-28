import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookingComponent from './src/screens/BookingScreen/Index';
import UserScreen from './src/screens/UserScreen/Index';
import { COLORS } from './src/constants/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    positin: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: '#fff'
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 12, color: "black" }}>
                    HomeScreen
                  </Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name="Booking"
          component={BookingComponent}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.pindad,
                  width: Platform.OS == "ios" ? 50 : -60,
                  height: Platform.OS == "ios" ? 50 : -60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : -30,
                }}>
                  <Text style={{ fontSize: 12, color: "black" }}>
                    Booking
                  </Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 12, color: "black" }}>
                    User
                  </Text>
                </View>
              )
            }
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})