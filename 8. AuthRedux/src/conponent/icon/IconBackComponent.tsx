import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/navigation';
type Props = {
  routeName: string;
};

const IconBackComponent: FC<Props> = props => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.wrapper}>
      <View style={styles.content1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('./../../assets/icon/Back.png')}
            style={{width: 12, height: 24}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content2}>
        <Text style={styles.text}>{props.routeName}</Text>
      </View>
      <View style={styles.content3}>
        {/* <Image
          source={require('./../../assets/icon/Back.png')}
          style={{width: 12, height: 24}}
        /> */}
      </View>
    </View>
  );
};

export default IconBackComponent;

const styles = StyleSheet.create({
  wrapper: {
    // flex:1,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  content1: {
    flex: 1,
  },
  content2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    // color:'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
