import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigation';

const NavBackComponent=() => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.wrapper}> Back</Text>
    </TouchableOpacity>
  )
}

export default NavBackComponent

const styles = StyleSheet.create({
  wrapper:{
    color:'blue',
    fontSize:20,
  }
})