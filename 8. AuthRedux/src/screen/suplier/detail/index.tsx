import {Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavBackComponent from '../../../conponent/navBackComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/navigation';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {deleteSuplier, suplierSelectors} from '../../../features/suplierSlice';
import BasicButtonComponentTouchable from '../../../conponent/buttonComponentTouchable';
import BasicButtonComponent from '../../../conponent/buttonComponent';

type Props = NativeStackScreenProps<RootStackParamList, 'SuplierDetail'>;
const DetailSuplier = ({route, navigation}: Props) => {
  const [input, setInput] = useState<boolean>(false);
  const [id, setId] = useState<any>('');

  const dispatch = useAppDispatch()
  const suplier = useAppSelector(state =>
    suplierSelectors.selectById(state, route.params.userId),
  );

  useEffect(() => {
    if (suplier) {
      setId(suplier.id)
    }
  }, [suplier])
  
  // delete data

  const isSuccess = useAppSelector(state => state.suplier.isSuccess);
  useEffect(() => {
    if (input===true&& isSuccess===true) {
      navigation.navigate('SuplierList')
    }
  }, [input,isSuccess])

  const deleteData = ()=>(
    Alert.alert('error','error'),
    dispatch(deleteSuplier(id)),
    setInput(true)
  )

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.wrapperNavBack}>
        <NavBackComponent />
      </View>
      <View style={styles.wrapperData}>
        <Text>Nama Suplier : {suplier?.nama_suplier}</Text>
        <Text>Alamat Suplier : {suplier?.nama_suplier}</Text>
        <Text>Telp Suplier : {suplier?.telp_suplier}</Text>
      </View>
      <View style={styles.wrapperBtn}>
        <BasicButtonComponentTouchable
          label="edit"
          bakcgroundColor="black"
          textColor="white"
          borderColor="gold"
          onPress={() =>
            navigation.navigate('SuplierEdit', {userId: route.params.userId})
          }
        />
      </View>

      <TouchableOpacity onPress={deleteData} style={styles.wrapperBtn}>
          <BasicButtonComponent
            label="Delete"
            bakcgroundColor="black"
            textColor="white"
            borderColor="gold"
          />
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailSuplier;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperNavBack: {
    marginBottom: 10,
  },
  wrapperData: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  },
  wrapperBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
