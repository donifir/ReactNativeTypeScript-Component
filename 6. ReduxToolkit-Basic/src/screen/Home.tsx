import {Alert, Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {ListItem} from '@react-native-material/core';
import { useAppDispatch, useAppSelector} from '../app/hooks';
import { useDispatch } from 'react-redux';
import {getUserList} from '../features/userSlice'
import { User } from '../model/user';
import ButtonPlusComponents from '../component/ButtonPlusComponents';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
// import { useAppDispatch } from '../app/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ route, navigation }: Props) => {
  const [data, setData] = useState<User[]>([])
  const count = useAppSelector(state => state.user.data)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserList())
  }, [dispatch])

  
  return (
    <View style={styles.wrapper}>
      <ScrollView>
       {count.map((datae, index) => (
        <View key={index}>
            <ListItem
              onPress={() => navigation.push('Detail',{userId:datae.id})}
              title={datae.nama}
              secondaryText={datae.quotes}
            />
          </View>
        ))}
        </ScrollView>
        <View style={styles.wrapperButton}>
          <ButtonPlusComponents  onPress={() => navigation.navigate('Create')}/>
        </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    position:'relative'
  },
  wrapperButton:{
    position:'absolute',
    bottom:10,
    right:10
  }
});
