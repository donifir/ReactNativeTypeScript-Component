import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';

import {object, string, number, date, InferType, boolean, ref} from 'yup';
import {TextInput} from '@react-native-material/core';
import axios from 'axios';

let registerloginValidationSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
  confirmPassword: string().oneOf([ref('password')], 'password must match'),
});

const App = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Formik
      initialValues={{name: '', email: '', password: '', confirmPassword:''}}
      validateOnMount={true}
      onSubmit={values => {
        // Alert.alert('data', JSON.stringify(values.name));
        const formData = new FormData()
        formData.append('name',values.name)
        formData.append('email',values.email)
        formData.append('password',values.password)
        formData.append('confirm_password',values.confirmPassword)

        axios.post('http://192.168.91.12:8000/api/register', formData)
        .then(function (response) {
         Alert.alert('success','register berhasil')
        })
        .catch(function (error) {
          console.log(error.response.data);
        });

      }} //ini adalah valuenya seperti formdata
      validationSchema={registerloginValidationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <SafeAreaView style={styles.container}>
          <TextInput
            style={{marginVertical: 16}}
            label="Name"
            variant="outlined"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.email && errors.email && (
            <Text style={{color: 'red', marginBottom: 16}}>{errors.name}</Text>
          )}

          <TextInput
            style={{marginVertical: 16}}
            label="Email"
            variant="outlined"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && (
            <Text style={{color: 'red', marginBottom: 16}}>{errors.email}</Text>
          )}

          <TextInput
            style={{marginVertical: 16}}
            label="Password"
            variant="outlined"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry={showPassword}
          />

          {touched.password && errors.password && (
            <Text style={{color: 'red', marginBottom: 16}}>
              {errors.password}
            </Text>
          )}

          <TextInput
            style={{marginVertical: 16}}
            label="Confirm Password"
            variant="outlined"
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            secureTextEntry={showPassword}
          />

          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={{color: 'red', marginBottom: 16}}>
              {errors.confirmPassword}
            </Text>
          )}

          <Button
            title="Contained"
            disabled={!isValid}
            onPress={handleSubmit}
          />
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
