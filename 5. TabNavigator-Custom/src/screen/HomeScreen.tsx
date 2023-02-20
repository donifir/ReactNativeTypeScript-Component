import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import NavbarComponent from '../component/navbarComponent';
import AboutScreen from './AboutScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({route, navigation}: Props) => {
  const [data, setData] = useState<string>('home');
  return (
    <View style={styles.wrapper}>
      {data === 'home' ? (
        <>
          <Text>HomeScreen</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SubHomeScreen')}>
            <Text style={{color:'blue'}}>NavbarComponent</Text>
          </TouchableOpacity>
        </>
      ) : data === 'about' ? (
        <AboutScreen />
      ) : (
        <Text>'tidak diketahui'</Text>
      )}

      <View style={styles.wrapperNav}>
        <View style={styles.wrapperData}>
          <View style={styles.wrapperNavbar}>
            <TouchableOpacity onPress={() => setData('home')}>
              <Text>NavbarComponent</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperNavbar}>
            <TouchableOpacity onPress={() => setData('about')}>
              <Text>NavbarComponent</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  wrapperNav: {
    position: 'absolute',
    bottom: 0,
  },
  wrapperData: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    backgroundColor: '#bfbfbf',
  },
  wrapperNavbar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
});
