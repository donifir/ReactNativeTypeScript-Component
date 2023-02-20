import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Button } from '@react-native-material/core';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperHeader}>
        <Image
          source={require('../../assets/imagelogo.png')}
          style={{width: '90%', height: '90%'}}
        />
      </View>

      <View style={styles.wrapperButton}>
        <Text style={styles.text}>Ayo Atur Aktivitasmu</Text>
        <TouchableOpacity style={styles.tauchable}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tauchable}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfe0eb',
    flex: 1,
  },
  wrapperHeader: {
    width: windowWidth,
    height: windowWidth,
    backgroundColor: 'white',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperButton: {
    marginHorizontal: 10,
    marginTop: 30,
    // backgroundColor: '#dfe0eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#48484a',
    fontSize: 18,
  },
  tauchable:{
    marginTop:20,
    backgroundColor:'white',
    width:'80%',
    justifyContent:'center',
    alignItems:'center',
    height:40,
    borderRadius:10,
    shadowColor:'black',
    shadowOpacity:0.2,
    borderWidth:1,
    borderColor:'#7a7b82'
  }
});
