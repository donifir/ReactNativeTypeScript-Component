import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ route, navigation }: Props) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')} style={styles.wrapper}>
      <Text>HomeScreen</Text>
    </TouchableOpacity>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  }
})