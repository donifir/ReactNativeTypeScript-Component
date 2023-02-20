import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Navigation';
import {useNavigation} from '@react-navigation/native';

const TabHomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')}>
        <Text style={{color:'blue'}}>Go to AboutScreen</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TabHomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
