/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './store/reducers/configureStore'
import { Provider } from 'react-redux';

console.disableYellowBox = true;

const store = configureStore()
const RNRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )
AppRegistry.registerComponent(appName, () => RNRedux);
