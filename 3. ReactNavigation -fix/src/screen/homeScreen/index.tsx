import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../component/button';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
const HomeScreen = ({navigation }: Props) => {

  // const HomeScreen = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.wrapperUser} onPress={() => navigation.navigate('AboutScreen')}>
        <Text>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.wrapperUser} onPress={() => navigation.navigate('UserPropScreen',{userId:"1"})}>
        <Text>User dg Props id:1</Text>
      </TouchableOpacity>

      <ButtonComponent label="kirim dengan component : 1" onPress={() => { navigation.navigate('UserPropScreen',{userId:"1"})}}/>
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
  wrapperUser:{
    marginVertical:10,
    width:300,
    backgroundColor:'#3babd1',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderWidth:1
  }
})