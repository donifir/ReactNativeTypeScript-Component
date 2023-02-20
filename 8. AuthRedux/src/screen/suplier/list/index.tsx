import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import NavBackComponent from '../../../conponent/navBackComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/navigation';
import {ListItem} from '@react-native-material/core';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {getListSuplier, suplierSelectors} from '../../../features/suplierSlice';
import BasicButtonComponentTouchable from '../../../conponent/buttonComponentTouchable';
import {ScrollView} from 'react-native-gesture-handler';

type Props = NativeStackScreenProps<RootStackParamList, 'SuplierList'>;
const SuplierList = ({route, navigation}: Props) => {
  const dispatch = useAppDispatch();
  const supliers = useAppSelector(suplierSelectors.selectAll); //cara ambil data dari store

  useEffect(() => {
    dispatch(getListSuplier());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.wrapperNavBack}>
        <NavBackComponent />
      </View>
      <View>
        <ScrollView>
          {supliers.map((data, index) => (
            <View key={index}>
              <ListItem
                onPress={() => navigation.navigate('SuplierDetail',{userId:data.id})}
                title={data.nama_suplier}
                secondaryText={data.alamat_suplier}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.wrapperBtnCreate}>
        <View style={styles.wrapperBtn}>
          <BasicButtonComponentTouchable
            label="create"
            bakcgroundColor="black"
            textColor="white"
            borderColor="gold"
            onPress={() => navigation.navigate('SuplierCreate')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuplierList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperNavBack: {
    marginBottom: 10,
  },
  wrapperBtnCreate: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // backgroundColor: 'red',
  },
  wrapperBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
