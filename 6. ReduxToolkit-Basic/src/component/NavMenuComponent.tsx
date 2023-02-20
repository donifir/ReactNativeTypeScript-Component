import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

const NavMenuComponent = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperNav}>
        <Text>Home</Text>
      </View>
      <View style={styles.wrapperNav}>
        <Text>Chat</Text>
      </View>
      <View style={styles.wrapperNav}>
        <Text>Setting</Text>
      </View>
    </View>
  );
};

export default NavMenuComponent;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height:40,
  },
  wrapperNav:{
    width:windowWidth/3,
    justifyContent:'center',
    alignItems:'center'
  },
});
