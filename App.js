import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/Login';
import UserAdmin from './src/component/TabAdmin'
import TabUser from './src/component/TabUser'
import RegisterScreen from './src/screens/Register'
import AddAuthor from './src/screens/AddAuthor'
import EditAuthor from './src/screens/EditAuthor'
import AddGenre from './src/screens/AddGenre'
import EditGenre from './src/screens/EditGenre'
import EditProfile from './src/screens/EditProfile'
import Details from './src/screens/Details'
import DetailAdmin from './src/screens/DetailAdmin'
import LoginAdmin from './src/screens/LoginAdmin'
import Splash from './src/screens/Splash';
import LandingPage from './src/screens/LandingPage';

import { store, persistor } from './src/redux/store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen component={LandingPage} name="landingPage" options={{ headerShown: false }} />
                <Stack.Screen component={LoginScreen} name={'login'} options={{ headerShown: false }} />
                {/* <Stack.Screen component={LoginAdmin} name={'loginAdmin'} options={{ headerShown: false }} /> */}
                <Stack.Screen component={RegisterScreen} name={'register'} options={{ headerShown: false }} />
                <Stack.Screen component={UserAdmin} name={'usermenu'} options={{ headerShown: false }} />
                <Stack.Screen component={TabUser} name={'menuuser'} options={{ headerShown: false }} />
                <Stack.Screen component={AddAuthor} name={'addAuthor'} options={{ headerShown: false }} />
                <Stack.Screen component={EditAuthor} name={'editAuthor'} options={{ headerShown: false }} />
                <Stack.Screen component={AddGenre} name={'addGenre'} options={{ headerShown: false }} />
                <Stack.Screen component={EditGenre} name={'editGenre'} options={{ headerShown: false }} />
                <Stack.Screen component={EditProfile} name={'editProfile'} options={{ headerShown: false }} />
                <Stack.Screen
                  options={{ title: 'Detail' }}
                  component={Details}
                  name={'detail'}
                />
                <Stack.Screen
                  options={{ title: 'Detail' }}
                  component={DetailAdmin}
                  name={'detailAdmin'}
                />
              </>
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}