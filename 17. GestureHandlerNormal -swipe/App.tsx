import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppleStyleSwipeableRow from './src/gesturehandler'
import Example from './src/newGesturhandler'

const App = () => {
  return (
    <SafeAreaView>
      <AppleStyleSwipeableRow/>
      <Example/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})