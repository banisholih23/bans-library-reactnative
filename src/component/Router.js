import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'

import LoginScreen from '../screens/Login';
import UserAdmin from '../component/TabAdmin'
import TabUser from '../component/TabUser'
import RegisterScreen from '../screens/Register'
import AddAuthor from '../screens/AddAuthor'
import EditAuthor from '../screens/EditAuthor'
import AddGenre from '../screens/AddGenre'
import EditGenre from '../screens/EditGenre'
import EditProfile from '../screens/EditProfile'
import Details from '../screens/Details'
import DetailAdmin from '../screens/DetailAdmin'
import LoginAdmin from '../screens/LoginAdmin'
import Splash from '../screens/Splash';
import SplashHome from '../screens/SplashToHome'
import LandingPage from '../screens/LandingPage';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    const {token}  = this.props.auth
    console.log('ini token auth = ',token)
    return (
      <>
      <NavigationContainer>
        <Stack.Navigator>
          {token === null ? (
            <>
              <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
              <Stack.Screen component={LandingPage} name="landingPage" options={{ headerShown: false }} />
              <Stack.Screen component={LoginScreen} name={'login'} options={{ headerShown: false }} />
              <Stack.Screen component={LoginAdmin} name={'loginAdmin'} options={{ headerShown: false }} />
              <Stack.Screen component={UserAdmin} name={'usermenu'} options={{ headerShown: false }} />
              <Stack.Screen component={RegisterScreen} name={'register'} options={{ headerShown: false }} />
            </>
          ) : (
              <>
                <Stack.Screen name="Splash" component={SplashHome} options={{ headerShown: false }} />
                <Stack.Screen component={UserAdmin} name={'usermenu'} options={{ headerShown: false }} />
                <Stack.Screen component={TabUser} name={'menuuser'} options={{ headerShown: false }} />
                <Stack.Screen component={AddAuthor} name={'addAuthor'} options={{ headerShown: false }} />
                <Stack.Screen component={EditAuthor} name={'editAuthor'} options={{ headerShown: false }} />
                <Stack.Screen component={AddGenre} name={'addGenre'} options={{ headerShown: false }} />
                <Stack.Screen component={EditGenre} name={'editGenre'} options={{ headerShown: false }} />
                <Stack.Screen component={EditProfile} name={'editProfile'} options={{ headerShown: false }} />
                <Stack.Screen component={LoginScreen} name={'login'} options={{ headerShown: false }} />
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
            )}
        </Stack.Navigator>
      </NavigationContainer>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)