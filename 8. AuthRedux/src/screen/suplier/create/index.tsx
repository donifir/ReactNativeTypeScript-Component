import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavBackComponent from '../../../conponent/navBackComponent';
import {TextInput} from '@react-native-material/core';
import BasicButtonComponent from '../../../conponent/buttonComponent';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {postCreateSuplier} from '../../../features/suplierSlice';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/navigation';


type Props = NativeStackScreenProps<RootStackParamList, 'SuplierCreate'>;

const CreateSuplier = ({route, navigation}: Props) => {
  const [namaSuplier, setNamaSuplier] = useState<string>('');
  const [alamatSuplier, setAlamatSuplier] = useState<string>('');
  const [telpSuplier, setTelpSuplier] = useState<string>('');
  const [inputForm, setInputForm] = useState<boolean>(false);

  const formData = new FormData();
  formData.append('nama_suplier', namaSuplier);
  formData.append('alamat_suplier', alamatSuplier);
  formData.append('telp_suplier', telpSuplier);

  const dispatch = useAppDispatch();

  const handleInput = async () => {
    await dispatch(postCreateSuplier(formData));
    setInputForm(true)
  };
  const isSuccess = useAppSelector(state => state.suplier.isSuccess);

  useEffect(() => {
    if (inputForm===true && isSuccess===true) {
      navigation.navigate('SuplierList')
      setInputForm(false)
      Alert.alert('success','Data created')
    }
  }, [inputForm,isSuccess])
  

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
          value={namaSuplier}
          onChangeText={(value)=>setNamaSuplier(value)}
        />
        <TextInput
          variant="outlined"
          label="Alamat Suplier"
          style={{margin: 16}}
          color="black"
          value={alamatSuplier}
          onChangeText={(value)=>setAlamatSuplier(value)}
        />
        <TextInput
          variant="outlined"
          label="Telp Suplier"
          style={{margin: 16}}
          color="black"
          value={telpSuplier}
          onChangeText={(value)=>setTelpSuplier(value)}
        />
      </View>
      <View style={styles.wrapperBtn}>
        <TouchableOpacity onPress={handleInput}>
          <BasicButtonComponent
            label="create"
            bakcgroundColor="black"
            textColor="white"
            borderColor="gold"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateSuplier;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperNavBack: {
    marginBottom: 10,
  },
  wrapperBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
