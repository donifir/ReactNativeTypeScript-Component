import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import axios from 'axios';
import NavbarComponent from '../../componen/navbarComponent';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailScreen'>;

const DetailScreen = ({ route, navigation }: Props) => {
  const [userId, setUserId] = useState<string>('');
  const [nama, setNama] = useState<string>('');
  const [alamat, setAlamat] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [quotes, setQuotes] = useState<string>('');

  // getData
  async function getData() {
    try {
      const response = await axios.get(`http://192.168.91.12:8000/api/data/${route.params.userId}`);
      setUserId(response.data.data.id)
      setNama(response.data.data.nama)
      setAlamat(response.data.data.alamat)
      setEmail(response.data.data.email)
      setQuotes(response.data.data.quotes)

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData()
  }, [])

  //delete data
  const deleteData = () => {
   
    axios.delete(`http://192.168.91.12:8000/api/data/${route.params.userId}/delete`)
      .then(function (response) {
        Alert.alert('success','data deleted')
        navigation.push('HomeScreen')
      })
      .catch(function (error) {
        Alert.alert('gagal','data delete error')
      })

  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <NavbarComponent onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.wrapperContent}>

        <View style={styles.contentLeft}>
          <Image source={require('./../../asets/images/Dog-PNG-Image1.png')} style={{ width: 140, height: 180 }} />
        </View>

        <View style={styles.contentRight}>
          <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{nama}</Text>
          <Text style={{ fontSize: 16, color: '#828282', marginTop: 15 }}>{alamat}</Text>
          <Text style={{ fontSize: 16, color: '#4F4F4F', marginTop: 20 }}>{quotes}</Text>
        </View>

      </View>

      <TouchableOpacity style={styles.wrapperBtn} onPress={() => navigation.navigate('EditScreen', { userId: userId })}>
        <Text style={{ fontSize: 16, color: '#4F4F4F', }}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.wrapperBtn} onPress={deleteData}>
        <Text style={{ fontSize: 16, color: '#4F4F4F', }}>Delete</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapperContent: {
    marginTop: 30,
    margin: 15,
    backgroundColor: 'white',
    height: 200,
    borderRadius: 20,
    shadowOpacity: 0.9,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentLeft: {

  },
  contentRight: {

  },
  wrapperBtn: {
    margin: 15,
    backgroundColor: 'white',
    height: 40,
    borderRadius: 20,
    shadowOpacity: 0.9,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})