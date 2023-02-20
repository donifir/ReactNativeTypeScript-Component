import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props={
  label:string,
}

const ButtonComponent:FC<Props> = ({label}) => {
  return (
    <View style={ styles.wrapper}>
      <Text style={{fontSize:16}}>{label}</Text>
    </View>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
  wrapper:{
    width:250,
    height:45,
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderWidth:1
  }
})