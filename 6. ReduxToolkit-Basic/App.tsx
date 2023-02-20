import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRoot from './src/navigation';
import store from './src/app/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationRoot />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
