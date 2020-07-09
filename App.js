import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/Login';
import UserAdmin from './src/component/TabAdmin'
import RegisterScreen from './src/screens/Register'
import AddAuthor from './src/screens/AddAuthor'
import EditAuthor from './src/screens/EditAuthor'
import AddGenre from './src/screens/AddGenre'
import EditGenre from './src/screens/EditGenre'
// import Dashboard from './src/screens/Dashboard'
import Details from './src/screens/Details'
// import Profile from './src/screens/Profile'
// import History from './src/screens/HistoryTransactions'

import {store, persistor} from './src/redux/store';
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen component={LoginScreen} name={'login'} options={{ headerShown: false }} />
              <Stack.Screen component={RegisterScreen} name={'register'} options={{ headerShown: false }} />
              <Stack.Screen component={UserAdmin} name={'usermenu'} options={{ headerShown: false }} />
              <Stack.Screen component={AddAuthor} name={'addAuthor'} options={{headerShown: false}}/>
              <Stack.Screen component={EditAuthor} name={'editAuthor'} options={{headerShown: false}}/>
              <Stack.Screen component={AddGenre} name={'addGenre'} options={{headerShown: false}}/>
              <Stack.Screen component={EditGenre} name={'editGenre'} options={{headerShown: false}}/>
              <Stack.Screen
                options={{ title: 'Detail' }}
                component={Details}
                name={'detail'}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}