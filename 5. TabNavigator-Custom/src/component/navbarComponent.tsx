import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NavbarComponent = () => {
  return (
    <View style={styles.wrapperData}>
      <View style={styles.wrapperNav}>
        <TouchableOpacity>
          <Text>NavbarComponent</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperNav}>
        <TouchableOpacity>
          <Text>NavbarComponent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavbarComponent;

const styles = StyleSheet.create({
  wrapperData: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    backgroundColor: '#bfbfbf',
  },
  wrapperNav: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
});
