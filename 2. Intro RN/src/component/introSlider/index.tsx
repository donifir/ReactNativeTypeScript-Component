import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DotComponent from '../sliderIcon/dotComponent';
import OvalComponent from '../sliderIcon/ovalComponent';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


type Props = {
  judul: string
  ids: string
  text:string
}

const IntroSlider: FC<Props> = ({judul,ids, text}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.WrapperContentImage}>
        <Image source={require('./../../../images/intro/Animal.png')} />
      </View>
      <View style={styles.wrapperText1}>
        <Text style={styles.text1}>{judul}</Text>
      </View>
      <View style={styles.wrapperText2}>
        <Text style={styles.text2}>{text}</Text>
      </View>

    </View>
  )
}

export default IntroSlider

const styles = StyleSheet.create({
  wrapper: {
    height: windowHeight,
    width: windowWidth,
    // backgroundColor: 'gold',
    // justifyContent:'center',
    alignItems:'center'
  },
  WrapperContentImage: {
    width: windowWidth,
    height: windowHeight / 2,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperText1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    marginTop: 40,
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black'
  },
  wrapperText2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    marginTop: 15,
    paddingHorizontal: 20,
  },
  text2: {
    fontSize: 18,
    color: '#828282'
  },

  wrapperBtn:{
    justifyContent:"center",
    alignItems:'center',
    marginVertical:50,
    width:windowWidth/1.2,
    backgroundColor:'#5533EA',
    height:40,
    borderRadius:15
  },
  textBtn:{
    color:'white',
    fontSize:18,
    fontWeight:'600'

  }

})