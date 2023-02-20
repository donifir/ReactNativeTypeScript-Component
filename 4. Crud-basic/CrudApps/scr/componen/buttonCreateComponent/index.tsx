import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

type Props={
  // label:string;
  onPress: () => void
}

const ButtonCreateComponent:FC <Props> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={()=>onPress()}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  )
}

export default ButtonCreateComponent

const styles = StyleSheet.create({
  wrapper:{
    width:45,
    height:45,
    backgroundColor:'#c2c7cf',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:45/2,
    borderColor:'#95989e',
    borderWidth:1,
  },
  text:{
    fontSize:28
  }
})