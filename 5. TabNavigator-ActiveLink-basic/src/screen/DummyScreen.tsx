import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NavBottom from '../component/NavBottom'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'DummyScreen'>;
export default function DummyScreen({ route, navigation }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text>DummyScreen{route.name==='DummyScreen'?" aktive":" non aktif"}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')}>
          <Text style={{color:'blue'}}>Go to About</Text>
      </TouchableOpacity>
      {/* <View style={styles.wrapperNav}>
        <NavBottom/>
      </View> */}
    </View>
  )
}

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