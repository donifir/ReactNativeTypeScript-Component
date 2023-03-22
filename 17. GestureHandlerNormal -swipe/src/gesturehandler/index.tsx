import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

class AppleStyleSwipeableRow extends Component {
  renderLeftActions = (progress:any, dragX:any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });

    return (
      <RectButton style={styles.leftAction} >
      {/* <RectButton style={styles.leftAction} onPress={this.close}> */}
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          Archive
        </Animated.Text>
      </RectButton>
    );
  };
  render() {
    return (
      <View style={styles.wrapper}>
      <Swipeable renderLeftActions={this.renderLeftActions}>
        <Text>"hello"</Text>
      </Swipeable>
      </View>
    );
  }
}

export default AppleStyleSwipeableRow
const styles = StyleSheet.create({
  wrapper:{
    width:'100%',
    height:30,
    backgroundColor:'grey',
    justifyContent:'center',
    // alignItems:'center'
  },
  leftAction:{
    backgroundColor:'red',
    height:30,
    borderRadius:10
  },
  actionText:{
    // backgroundColor:'blue'
  }
})