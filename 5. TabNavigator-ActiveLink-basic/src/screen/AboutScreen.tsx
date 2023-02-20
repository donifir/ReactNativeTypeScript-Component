import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NavBottom from '../component/NavBottom'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/TabNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'AboutScreen'>;

const AboutScreen = ({ route, navigation }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text>{route.name}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('DummyScreen')}>
          <Text style={{color:'blue'}}>Go to Dummy</Text>
      </TouchableOpacity>
      {/* <View style={styles.wrapperNav} >
        <NavBottom/>
      </View> */}
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },
  wrapperNav:{
    position:'absolute',
    bottom:0,
    width:'100%',
  }
})