import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props={
  onPress:()=>void
}

const ButtonPlusComponents:FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text style={{fontSize:25, color:'white'}}>+</Text>
    </TouchableOpacity>
  )
}

export default ButtonPlusComponents

const styles = StyleSheet.create({ 
  wrapper:{
    height:50,
    width:50,
    backgroundColor:'black',
    borderRadius:50/2,
    justifyContent:'center',
    alignItems:'center'
  }
})