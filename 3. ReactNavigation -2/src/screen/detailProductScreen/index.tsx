import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation'

type Props = NativeStackScreenProps<RootStackParamList,"DetailProductScreen">

const DetailProduckScreen= ({route}:Props)  => {
  return (
    <View>
      <Text>{route.params.name}</Text>
    </View>
  )
}

export default DetailProduckScreen

const styles = StyleSheet.create({})