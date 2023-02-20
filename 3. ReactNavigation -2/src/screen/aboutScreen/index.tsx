import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>AboutScreen</Text>
    </SafeAreaView>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  }
})