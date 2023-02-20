import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

type Props = {
  label:string;
  onPress: (name:string) => void
}

const ButtonComponent:FC<Props> = ({label,onPress}) => {

  return (
    <TouchableOpacity onPress={()=>onPress(label)} style={styles.wrapperUser}>
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
  wrapperUser:{
    marginVertical:10,
    width:300,
    backgroundColor:'#3babd1',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderWidth:1
  }
})