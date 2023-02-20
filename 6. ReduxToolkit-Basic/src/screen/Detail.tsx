import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {deleteUser, getUserDetail} from '../features/userSlice';
import {UserDetail} from '../model/userDetail';
import ButtonComponent from '../component/ButtonComponent';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;
const Detail = ({route, navigation}: Props) => {
  // const [data, setData] = useState<UserDetail[]>([])
  const [nama, setNama] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [aLamat, setALamat] = useState<string>('');
  const [quotes, setQuotes] = useState<string>('');

  //get Data
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserDetail(route.params.userId));
  }, [dispatch]);

  const data = useAppSelector(state => state.user.dataDetail);

  // setData / show data
  useEffect(() => {
    if (data) {
      setNama(data.nama);
      setEmail(data.email);
      setALamat(data.alamat);
      setQuotes(data.quotes);
    }
  }, [dispatch]);

  // delete data
  const deleteBtn=async()=>{
    // Alert.alert('data','data')
    await dispatch(deleteUser(route.params.userId));
    navigation.push('Home')
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.contemt}>
        <Text style={{fontSize:22}}>Nama:-{data.nama}</Text>
        <Text style={{fontSize:18}}>Email:-{data.email}</Text>
        <Text style={{fontSize:18}}>Quotes:-{data.quotes}</Text>
      </View>
      <TouchableOpacity style={styles.wrapperButton} onPress={() => navigation.navigate('Edit',{userId:route.params.userId})}>
        <ButtonComponent label='Edit'/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapperButton} onPress={deleteBtn}>
        <ButtonComponent label='Hapus'/>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent:'center',
    alignItems: 'center',
  },
  contemt: {
    width: '80%',
    height: '40%',
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  wrapperButton:{
    marginTop:30
  }
});
