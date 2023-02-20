import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonComponent from '../../component/buttonComponent'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList,"ProductScreen">;

const ProductScreen = ( {navigation}:Props) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity style={styles.wrapperBtn} onPress={() => navigation.navigate('DetailProductScreen',{name:'sandal produck'})}>
        <Text>DetailProducl "sandal product"</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.wrapperBtn} onPress={() => navigation.navigate('DetailProductScreen',{name:'baju produck'})}>
        <Text>DetailProducl "baju product"</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  wrapperBtn:{
    backgroundColor:'gold',
    width:'60%',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    marginVertical:10,
  }
})