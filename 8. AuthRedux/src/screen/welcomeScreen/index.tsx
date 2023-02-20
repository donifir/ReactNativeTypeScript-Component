import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BasicButtonComponent from '../../conponent/buttonComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/navigation';
import BasicButtonComponentTouchable from '../../conponent/buttonComponentTouchable';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Props = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen = ({route, navigation}: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperImage}>
        <Image
          source={require('./../../assets/image/Animal-removebg-preview.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.wrapperText}>
        <Text style={styles.text1}>My Petch</Text>
        <Text style={styles.text2}>
          Taking care of a pet is my favorite, it helps me to gaimr stress and
          fatigue.
        </Text>
      </View>

      <View style={styles.wrapperBtn}>
        <BasicButtonComponentTouchable
          onPress={() => navigation.navigate('Login')}
          label="Login"
          bakcgroundColor="white"
          textColor="#57419D"
          borderColor="#57419D"
        />
        <BasicButtonComponentTouchable
          onPress={() => navigation.navigate('Register')}
          label="Register"
          bakcgroundColor="#57419D"
          textColor="white"
          borderColor="#57419D"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperImage: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: windowWidth,
  },
  image: {
    marginTop:40,
    width: windowWidth * 0.95,
    height: windowWidth * 0.95,
    // backgroundColor: 'blue',
  },
  wrapperText: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 20,
    fontWeight: '600',
  },
  text2: {
    textAlign: 'center',
    width: windowWidth * 0.85,
    marginTop: 20,
    fontSize: 16,
    color: '#828282',
  },
  wrapperBtn: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
});
