import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';


type Props = NativeStackScreenProps<RootStackParamList, 'AboutScreen'>;

const AboutScreen = ({route, navigation }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text>AboutScreen</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  }
})