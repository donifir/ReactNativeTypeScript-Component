import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBottom from '../component/NavBottom'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/TabNavigation';
import IconTabComponent from '../component/IconTabComponent';


type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>HomeScreen</Text>
      <IconTabComponent/>
      {/* <View style={styles.wrapperNav}>
        <NavBottom/>
      </View> */}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
  },
  wrapperNav:{
    position:'absolute',
    bottom:0,
    width:'100%',
  }
})