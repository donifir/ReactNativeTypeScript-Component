import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/navigation';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {deleteSuplier, postEditSuplier, suplierSelectors} from '../../../features/suplierSlice';
import {TextInput} from '@react-native-material/core';
import NavBackComponent from '../../../conponent/navBackComponent';
import BasicButtonComponent from '../../../conponent/buttonComponent';

type Props = NativeStackScreenProps<RootStackParamList, 'SuplierEdit'>;
const EditSuplier = ({route, navigation}: Props) => {
  const [id, setId] = useState<any>('');
  const [nama, setNama] = useState<any>('');
  const [alamat, setAlamat] = useState<any>('');
  const [telp, setTelp] = useState<any>('');
  const [input, setInput] = useState<boolean>(false);

  const suplier = useAppSelector(state =>
    suplierSelectors.selectById(state, route.params.userId),
  );

  useEffect(() => {
    setId(suplier?.id);
    setNama(suplier?.nama_suplier);
    setAlamat(suplier?.alamat_suplier);
    setTelp(suplier?.telp_suplier);
  }, [suplier]);

  const dispatch = useAppDispatch();

  const submitData = async ()=>{
    const formData = new FormData()
    formData.append('nama_suplier',nama)
    formData.append('alamat_suplier',alamat)
    formData.append('telp_suplier',telp)

    await dispatch(postEditSuplier({formData,userId:route.params.userId}))

    setInput(true)
  }
  const isSuccess = useAppSelector(state => state.suplier.isSuccess);
  useEffect(() => {
    if (input===true&& isSuccess===true) {
      navigation.navigate('SuplierList')
    }
  }, [input,isSuccess])

  

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.wrapperNavBack}>
        <NavBackComponent />
      </View>
      <View>
        <TextInput
          variant="outlined"
          label="Nama Suplier"
          style={{margin: 16}}
          color="black"
          value={nama}
          onChangeText={(value)=>setNama(value)}
        />
        <TextInput
          variant="outlined"
          label="Alamat Suplier"
          style={{margin: 16}}
          color="black"
          value={alamat}
          onChangeText={(value)=>setAlamat(value)}
        />
        <TextInput
          variant="outlined"
          label="Telp Suplier"
          style={{margin: 16}}
          color="black"
          value={telp}
          onChangeText={(value)=>setTelp(value)}
        />
      </View>
      <View style={styles.wrapperBtn}>
        <TouchableOpacity onPress={submitData}>
          <BasicButtonComponent
            label="Submit"
            bakcgroundColor="black"
            textColor="white"
            borderColor="gold"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditSuplier;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperNavBack: {
    marginBottom: 10,
  },
  wrapperBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
