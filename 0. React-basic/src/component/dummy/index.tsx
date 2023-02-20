import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
type Props = {
  title:string
  counters:number
}

const ExtendData:FC<Props> = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>Counter : {props.counters}</Text>
    </View>
  )
}

export default ExtendData

const styles = StyleSheet.create({})