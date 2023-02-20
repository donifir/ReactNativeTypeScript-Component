import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {useAppSelector} from '../app/hooks';
import LoginScreen from '../screen/auth/login';
import RegisterScreen from '../screen/auth/register';
import Homescreen from '../screen/homeScreen/homescreen';
import SplasScreen from '../screen/SplasScreen';
import CreateSuplier from '../screen/suplier/create';
import DetailSuplier from '../screen/suplier/detail';
import EditSuplier from '../screen/suplier/edit';
import SuplierList from '../screen/suplier/list';
import WelcomeScreen from '../screen/welcomeScreen';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  SuplierList:undefined;
  SuplierCreate:undefined;
  SuplierDetail:{
    userId:string
  };
  SuplierEdit:{
    userId:string
  };
};
const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  const [token, setToken] = useState<string>('');
  const redirect = useAppSelector(state => state.user.isRedirect);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        console.log(value, 'ini value token');
        setToken(value);
      } else {
        setToken('');
      }
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, [redirect, token]);

  if (redirect === true) {
    return <SplasScreen />;
  }

  return (
    <RootStack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{headerShown: false}}>
      {token ? (
        <>
          <RootStack.Screen name="Home" component={Homescreen} />
          <RootStack.Screen name="SuplierList" component={SuplierList} />
          <RootStack.Screen name="SuplierCreate" component={CreateSuplier} />
          <RootStack.Screen name="SuplierDetail" component={DetailSuplier} />
          <RootStack.Screen name="SuplierEdit" component={EditSuplier} />
        </>
      ) : (
        <>
          <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default Navigation;
