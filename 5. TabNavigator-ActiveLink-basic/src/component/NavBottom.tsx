import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/TabNavigation';

const NavBottom = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('DummyScreen')}>
          <Text>DummyScreen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')}>
          <Text>About Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBottom;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    height: 40,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
  },
  wrapperBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
