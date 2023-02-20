import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OvalComponent = () => {
  return (
    <View style={styles.wrapper}>
    </View>
  )
}

export default OvalComponent

const styles = StyleSheet.create({
  wrapper:{
    height:10,
    width:25,
    backgroundColor:'#5533EA',
    borderRadius:10/2,
    marginHorizontal:5
  }
})