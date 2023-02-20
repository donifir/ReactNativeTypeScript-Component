import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ArrowIcon = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={require('./../../../assets/images/Iicon_Back.png')}  style={{width: 10, height: 20}}/>
      <Text style={styles.text}>Back</Text>
    </View>
  )
}

export default ArrowIcon

const styles = StyleSheet.create({
  wrapper:{
    marginHorizontal:10,
    flexDirection:'row',
    // justifyContent: 'center',
    alignItems:'center'
  },
  text:{
    fontSize:18,
    marginLeft:10,
    color:'#313131',
    fontWeight:'600'
  }

})