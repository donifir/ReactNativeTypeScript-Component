import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavbarComponent from '../../componen/navbarComponent'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { ListItem } from '@react-native-material/core';
import ButtonCreateComponent from '../../componen/buttonCreateComponent';
import axios from 'axios';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

type Todo = {
  id: string;
  nama: string;
  email: string;
  alamat: string;
  quotes: string;
};

const HomeScreen = ({ navigation }: Props) => {

  const [data, setData] = useState<Todo[]>([]);

  async function getData() {
    try {
      const response = await axios.get('http://192.168.91.12:8000/api/data/');
      setData(response.data.data)
      console.log(JSON.stringify(data))
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.wrapperList} >

        {data.map((datae, index) => (
          <View key={index}>
            <ListItem
              onPress={() => navigation.navigate('DetailScreen',{userId:datae.id})}
              title={datae.nama}
              secondaryText={datae.quotes}
            />
          </View>
        ))}

      </ScrollView>
      <View style={styles.wrapperBtnCreate}>
        <ButtonCreateComponent onPress={() => navigation.navigate('CreateScreen')} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperList: {
    marginTop: 10,
  },
  wrapperBtnCreate: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  }
})