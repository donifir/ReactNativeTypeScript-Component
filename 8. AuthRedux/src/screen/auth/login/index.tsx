import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import IconBackComponent from '../../../conponent/icon/IconBackComponent';
import {TextInput} from '@react-native-material/core';
import BasicButtonComponent from '../../../conponent/buttonComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/navigation';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import { postDataLogin, resetState } from '../../../features/authSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({route, navigation}: Props) => {
  const [input, setInput] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleSubmit = async()=>{
    const formData = new FormData()
    formData.append('email',email)
    formData.append('password',password)

    await dispatch(postDataLogin(formData))

    setInput(true)
  }
  const dataError = useAppSelector(state => state.user.dataError);
  const dataResponUser = useAppSelector(state => state.user.dataResponUser);

  useEffect(() => {
    if (input==true && dataResponUser) {
      Alert.alert('sucess','login succesfully')
      // navigation.navigate('Home');
      dispatch(resetState())
    }
  }, [input,dataResponUser ])
  

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <IconBackComponent routeName="Login" />
      </View>
      <View style={styles.wrapperForm}>
        <TextInput
          variant="outlined"
          label="Email"
          style={{margin: 16}}
          color="#57419D"
          value={email}
          onChangeText={(value)=>setEmail(value)}
        />
        <Text style={styles.textError}>{input===true && dataError.email?dataError.email:''}</Text>
        <TextInput
          variant="outlined"
          label="Password"
          style={{margin: 16}}
          color="#57419D"
          value={password}
          onChangeText={(value)=>setPassword(value)}
        />
        <Text style={styles.textError}>{input===true && dataError.password?dataError.password:''}</Text>
      </View>
      <View style={styles.wrapperBtn}>
        <TouchableOpacity onPress={handleSubmit}>
          <BasicButtonComponent
            label="Login"
            bakcgroundColor="white"
            textColor="#57419D"
            borderColor="#57419D"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperForm: {
    marginTop: 20,
  },
  wrapperBtn: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textError: {
    marginHorizontal: 15,
    color: 'red',
  },
});
