import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonComponent from '../../component/buttonComponent'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation'

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity style={styles.wrapperBtn} onPress={()=>navigation.navigate('AboutScreen')}>
        <Text>AboutScreen</Text>
      </TouchableOpacity>

      <ButtonComponent label="About dari component"link="AboutScreen" onPress={() => { navigation.navigate('AboutScreen')}}/>

      <ButtonComponent label="Peoduct route props"link="AboutScreen" onPress={() => { navigation.navigate('ProductScreen')}}/>


    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  wrapperBtn: {
    backgroundColor: 'gold',
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
  }
})