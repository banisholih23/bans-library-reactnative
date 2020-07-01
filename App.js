import React, {Component} from 'react';
// import {View, Text, StyleSheet, FlatList} from 'react-native';

import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register'
import Dashboard from './src/screens/Dashboard'
import Details from './src/screens/Details'

export default class App extends Component {
  render() {
    return (
      <>
        {/* <LoginScreen /> */}
        {/* <RegisterScreen /> */}
        {/* <Dashboard /> */}
        <Details />
      </>
    );
  }
}