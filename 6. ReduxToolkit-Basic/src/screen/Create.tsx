import {Alert, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {TextInput} from '@react-native-material/core';
import ButtonComponent from '../component/ButtonComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useAppDispatch } from '../app/hooks';
import { getUserList, postUserCreate } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import {User} from '../model/user';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';


type Props = NativeStackScreenProps<RootStackParamList, 'Create'>;
const Create = ({ route, navigation }: Props) => {
  const [nama, setNama] = useState<string>('')
  const [alamat, setAlamat] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [quotes, setQuotes] = useState<string>('')

  const dispatch = useAppDispatch()

  const handleSubmit =()=>{
    // Alert.alert('data','masuk')
    // console.log('haha')
    const formData = new FormData()
    formData.append('nama',nama)
    formData.append('email',email)
    formData.append('alamat',alamat)
    formData.append('quotes',quotes)
    if (nama===""||email===""||alamat===""||quotes==="") {
      Alert.alert('gagal','data belum lengkap')
    }else{
      dispatch(postUserCreate(formData))
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

export default Create;

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
