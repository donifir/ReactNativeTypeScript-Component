import { Animated, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import IntroSlider from '../../component/introSlider'
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import ButtonComponent from '../../component/button';
import DotComponent from '../../component/sliderIcon/dotComponent';
import OvalComponent from '../../component/sliderIcon/ovalComponent';

type Props = NativeStackScreenProps<RootStackParamList, 'IntroScreen'>;

const IntroScreen = ({ navigation }: Props) => {
  const [id, setId] = useState<number>(1)
  const fadeAnim = useRef(new Animated.Value(0)).current;

  function addId(param: number): void {
    setId(param + 1)
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      {id == 1 ?
        <View style={[styles.wrapperSlide]}>
          <IntroSlider judul="slide welcome 1" ids="1" text="Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue." />
        </View>
        :
        ""}
      {id == 2 ?
        <View style={[styles.wrapperSlide]}>
          <IntroSlider judul="slide welcome 2" ids="2" text="Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue." />
        </View>
        :
        ""}
      {id == 3 ?
        <View style={[styles.wrapperSlide]}>
          <IntroSlider judul="slide welcome 3" ids="3" text="Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue." />
        </View>
        :
        ""}

      {id == 4 ?
        <View style={[styles.wrapperSlide]}>
          <IntroSlider judul="slide welcome 4" ids="4" text="Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue." />
        </View>
        :
        ""}

      <TouchableOpacity style={styles.wrapperBtn} onPress={() => addId(id)}>
        <View style={styles.wrapperIconSlide}>
          {id == 1 ? <OvalComponent /> : <DotComponent />}
          {id == 2 ? <OvalComponent /> : <DotComponent />}
          {id == 3 ? <OvalComponent /> : <DotComponent />}
          {id == 4 ? <OvalComponent /> : <DotComponent />}
        </View>
        <ButtonComponent />
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapperSlide: {
    flexDirection: 'row'
  },
  wrapperBtn: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapperIconSlide: {
    marginBottom: 10,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

})