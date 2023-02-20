import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'UserPropScreen'>;

const UserPropScreen = ({ route, navigation }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text>UserPropScreen</Text>
      <Text>isi prop : {route.params.userId}</Text>
    </View>
  )
}

export default UserPropScreen

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  
})