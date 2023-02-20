import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigation';
import { useAppDispatch } from '../../app/hooks';
import { postDataLogout, resetState } from '../../features/authSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Homescreen = ({route, navigation}: Props) => {
  const dispatch = useAppDispatch()

  const handleLogout=async()=>{
    dispatch(resetState())
    await dispatch(postDataLogout())
    // navigation.push('WelcomeScreen')
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        Alert.alert('token', value);
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={getData}>
        <Text>Homescreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={{color:'blue'}}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('SuplierList')}>
        <Text>SuplierList</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
