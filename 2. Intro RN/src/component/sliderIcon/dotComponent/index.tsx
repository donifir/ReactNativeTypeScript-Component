import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DotComponent = () => {
  return (
    <View style={styles.wrapper}>
       {/* <Image source={require('./../../../../images/components/Oval.png')} style={{width: 9, height: 9 ,marginHorizontal:5}} /> */}
    </View>
  )
}

export default DotComponent

const styles = StyleSheet.create({
  wrapper:{
    height:10,
    width:10,
    backgroundColor:'#a1a09d',
    borderRadius:10/2
  }
})