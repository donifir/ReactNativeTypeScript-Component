import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type Props={
  title:String
}

export default function ExtendData(props:PropsWithChildren<Props>) {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})