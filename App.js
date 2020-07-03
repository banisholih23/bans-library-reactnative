import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import LoginScreen from './src/screens/Login';
import UserMenu from './src/component/TabUser'
import RegisterScreen from './src/screens/Register'
import Dashboard from './src/screens/Dashboard'
import Details from './src/screens/Details'
import Profile from './src/screens/Profile'
import History from './src/screens/HistoryTransactions'

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={LoginScreen} name={'login'} options={{ headerShown: false }} />
          <Stack.Screen component={RegisterScreen} name={'register'} options={{ headerShown: false }} />
          <Stack.Screen component={UserMenu} name={'usermenu'} options={{ headerShown: false }} />
          <Stack.Screen
            options={{ title: 'Detail' }}
            component={Details}
            name={'detail'}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}