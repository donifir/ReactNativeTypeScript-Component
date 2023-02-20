import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Navigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
import { store } from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
