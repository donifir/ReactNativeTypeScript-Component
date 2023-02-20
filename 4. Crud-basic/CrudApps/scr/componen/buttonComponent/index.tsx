import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

type Props = {
  label:string;
}

const ButtonComponent:FC <Props> = (props) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
  wrapper:{
    width:'70%',
    backgroundColor:'black',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  text:{
    color:'white',
    fontSize:18
  }
})