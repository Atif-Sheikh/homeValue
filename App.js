/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
'use strict';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { connect } from 'react-redux';

import Main from './components/Main'
import BuyerInfo from './components/BuyerInfo'
import Login from './components/Login'
import Signup from './components/Signup'
import Buy from './components/Buy'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import './components/config'

const Stack = createStackNavigator();
const App = (props) => {
  console.log(props.estimatedValue)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="BuyerInfo" component={BuyerInfo} options={{headerShown: false}}/>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
        <Stack.Screen name="Buy" component={Buy} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => {
  return{
      estimatedValue:state.estimatedValueReducer.estimatedValue
  }
}
export default connect(mapStateToProps,null)(App)

