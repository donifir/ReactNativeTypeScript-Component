import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import NavbarComponent from '../../componen/navbarComponent';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { TextInput } from '@react-native-material/core';
import ButtonComponent from '../../componen/buttonComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateScreen'>;

const CreateScreen = ({ navigation }: Props) => {
  const [nama, setNama] = useState<string>('');
  const [alamat, setAlamat] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [quotes, setQuotes] = useState<string>('');

  const submitData=async()=>{

    const formData = new FormData()
    formData.append('nama',nama)
    formData.append('email',email)
    formData.append('alamat',alamat)
    formData.append('quotes',quotes)

    axios.post('http://192.168.91.12:8000/api/data/create', formData)
    .then(function (response) {
      Alert.alert('sukses','data berhasil ditambahkan')
      navigation.navigate('HomeScreen')
      console.log(response.data.data);
    })
    .catch(function (error) {
      if (error.response.data.message.nama) {
        Alert.alert('gagal',`${error.response.data.message.nama}`);
      } else if(error.response.data.message.email){
        Alert.alert('gagal',`${error.response.data.message.email}`);
      }else if(error.response.data.message.alamat){
        Alert.alert('gagal',`${error.response.data.message.alamat}`);
      }else if(error.response.data.message.quotes){
        Alert.alert('gagal',`${error.response.data.message.quotes}`);
      }
    });

    
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <NavbarComponent onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.wrapperContent}>
        <TextInput
          variant="outlined"
          label="Nama"
          style={{ margin: 16 }}
          color="black"
          value={nama}
          onChangeText={value => setNama(value)}
        />
        <TextInput
          variant="outlined"
          label="Email"
          style={{ margin: 16 }}
          color="black"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          variant="outlined"
          label="Alamat"
          style={{ margin: 16 }}
          color="black"
          value={alamat}
          onChangeText={value => setAlamat(value)}
        />
        <TextInput
          variant="outlined"
          label="Quotes"
          style={{ margin: 16 }}
          color="black"
          value={quotes}
          onChangeText={value => setQuotes(value)}
        />
      </View>
      <TouchableOpacity style={styles.wrapperBtn} onPress={submitData}>
        <ButtonComponent label='submit'/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperContent: {
    marginTop: 10,
  },
  wrapperBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
