import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import ArrowIcon from '../icon/arrowIcon'

type Props={
  onPress: () => void
}

const NavbarComponent:FC<Props> = ({onPress}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={()=>onPress()}>
        <ArrowIcon/>
      </TouchableOpacity>
    </View>
  )
}

export default NavbarComponent

const styles = StyleSheet.create({
  wrapper:{
    // backgroundColor:'red'
  }
})