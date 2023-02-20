import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { useNavigation } from '@react-navigation/native';

type Props = {
  label:string;
  link:string;
  onPress: (name:string) => void
}
const ButtonComponent:FC<Props> = ({label,link,onPress}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity style={styles.wrapper} onPress={()=>onPress(link)}>
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor:'gold',
    width:'60%',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    marginVertical:10,
  }
})