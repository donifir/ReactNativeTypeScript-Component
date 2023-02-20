import {Alert, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {TextInput} from '@react-native-material/core';
import ButtonComponent from '../component/ButtonComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { getUserDetail, postUserCreate, postUserUpdate } from '../features/userSlice';


type Props = NativeStackScreenProps<RootStackParamList, 'Edit'>;
const Edit = ({ route, navigation }: Props) => {
  const [userId, setUserId] = useState<string>('')
  const [nama, setNama] = useState<string>('')
  const [alamat, setAlamat] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [quotes, setQuotes] = useState<string>('')

  const dispatch = useAppDispatch()

  //get data
  useEffect(() => {
    dispatch(getUserDetail(route.params.userId));
  }, [dispatch]);
  const data = useAppSelector(state => state.user.dataDetail);
  useEffect(() => {
    if (data) {
      setUserId(data.id)
      setNama(data.nama)
      setEmail(data.email)
      setAlamat(data.alamat)
      setQuotes(data.quotes)
    }
  }, [dispatch]);


  // send data
  const handleSubmit =()=>{
    const formData = new FormData()
    formData.append('nama',nama)
    formData.append('email',email)
    formData.append('alamat',alamat)
    formData.append('quotes',quotes)
    if (nama===""||email===""||alamat===""||quotes==="") {
      Alert.alert('gagal','data belum lengkap')
    }else{
      dispatch(postUserUpdate({formData,userId}))
      navigation.push('Home')
    }
  
  }

  return (
    <View style={styles.wrapper}>
      <TextInput
        variant="outlined"
        label="Nama"
        style={{margin: 16}}
        color="black"
        value={nama}
        onChangeText={(value)=>setNama(value)}
      />
      <TextInput
        variant="outlined"
        label="Email"
        style={{margin: 16}}
        color="black"
        value={email}
        onChangeText={(value)=>setEmail(value)}
      />
      <TextInput
        variant="outlined"
        label="Alamat"
        style={{margin: 16}}
        color="black"
        value={alamat}
        onChangeText={(value)=>setAlamat(value)}
      />
      <TextInput
        variant="outlined"
        label="Quotes"
        style={{margin: 16}}
        color="black"
        value={quotes}
        onChangeText={(value)=>setQuotes(value)}
      />
      <TouchableOpacity style={styles.wrapperBtn} onPress={handleSubmit}>
        <ButtonComponent label="submit / create" />
      </TouchableOpacity>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
