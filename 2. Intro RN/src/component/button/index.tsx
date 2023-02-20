import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View style={styles.wrapper}>
      <Text>ButtonComponent</Text>
    </View>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
  wrapper:{
    width:'60%',
    height:40,
    backgroundColor:'#57419D',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  }
})