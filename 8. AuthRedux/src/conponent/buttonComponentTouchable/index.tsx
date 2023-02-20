import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Props={
label:string;
bakcgroundColor:string;
textColor:string;
borderColor:string;
onPress:()=>void
}

const BasicButtonComponentTouchable:FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.wrapper, {backgroundColor:props.bakcgroundColor}]}>
      <Text style={[styles.text, {color:props.textColor, borderColor:props.borderColor}]}>{props.label}</Text>
    </TouchableOpacity>
  )
}

export default BasicButtonComponentTouchable

const styles = StyleSheet.create({
  wrapper:{
    marginVertical:7,
    width:windowWidth*0.85,
    // backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    height:45,
    borderRadius:20,
    borderWidth:1,
  },
  text:{
    // color:'white',
    fontSize:16,
    fontWeight:'600'
  }
})