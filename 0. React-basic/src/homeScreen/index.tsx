import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ExtendData from '../component/dummy'

export default function HomeScreen() {
  const [counter, setCounter] = useState<number>(0)
  const [name, setName] = useState<{ firsname: string, lastName: string }>({ firsname: '', lastName: '' })

  function addCounter(param: number): void {
    setCounter(param + 1)
  }

  function _login(){
    setName({
      firsname:'john',
      lastName:'doe'
    })
  }

  const Data = () => {
    return (
      <View>
        <Text>Data Reurn</Text>
        <TouchableOpacity onPress={()=>addCounter(counter)}>
          <Text style={{color:'blue'}}>Tambah</Text>
        </TouchableOpacity>
        <View>
          <Text>First Name:{name.firsname}</Text>
          <Text>Last Name:{name.lastName}</Text>
        </View>
        <TouchableOpacity onPress={()=>_login()}>
          <Text style={{color:'blue'}}>Set Nama</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <ExtendData title='data' counters={counter}/>
      <Data />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})