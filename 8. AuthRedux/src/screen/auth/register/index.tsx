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
import {postDataRegister, resetState} from '../../../features/authSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({route, navigation}: Props) => {
  const [viewError, setViewError] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const dispatch = useAppDispatch();
  const dataError = useAppSelector(state => state.user.dataError);
  const dataUser = useAppSelector(state => state.user.dataUser);

  const handleSubmit = async () => {
    // Alert.alert('haha','hihi')
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('confirm_password', confirmPassword);

    await dispatch(postDataRegister(formData));

    setViewError(true);
  };

  useEffect(() => {
    if ( viewError === true && dataUser) {
      Alert.alert('sucess','register succesfully')
      dispatch(resetState())
      // navigation.navigate('Home');
    }
  }, [dataUser,viewError]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <IconBackComponent routeName="Login" />
      </View>
      <View style={styles.wrapperForm}>
        <TextInput
          variant="outlined"
          label="Name"
          style={{margin: 16}}
          color="#57419D"
          value={name}
          onChangeText={value => setName(value)}
        />
        <Text style={styles.textError}>{viewError ? dataError.name : ''}</Text>
        <TextInput
          variant="outlined"
          label="Email"
          style={{margin: 16}}
          color="#57419D"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Text style={styles.textError}>{viewError ? dataError.email : ''}</Text>
        <TextInput
          variant="outlined"
          label="Password"
          style={{margin: 16}}
          color="#57419D"
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Text style={styles.textError}>
          {viewError ? dataError.password : ''}
        </Text>
        <TextInput
          variant="outlined"
          label="Confirm Password"
          style={{margin: 16}}
          color="#57419D"
          value={confirmPassword}
          onChangeText={value => setConfirmPassword(value)}
        />
        <Text style={styles.textError}>
          {viewError ? dataError.confirm_password : ''}
        </Text>
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

export default RegisterScreen;

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
    // backgroundColor:'red'
  },
  textError: {
    marginHorizontal: 15,
    color: 'red',
  },
});
