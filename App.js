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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = (props) => {
  console.log(props.estimatedValue)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BuyerInfo">
        <Stack.Screen name="BuyerInfo" component={BuyerInfo} options={{headerShown: false}}/>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
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
