import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register'
import Dashboard from './src/screens/Dashboard'
import Details from './src/screens/Details'
import Profile from './src/screens/Profile'
import History from './src/screens/HistoryTransactions'

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

class Tab extends Component {
  render() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          options={{
            title: 'Home',
            tabBarIcon: () => (
              <Icon name="home" color={'black'} size={20} />
            ),
          }}
          component={Dashboard}
          name="home"
        />
        <BottomTab.Screen
          options={{
            title: 'History',
            tabBarIcon: () => (
              <Icon name="history" color={'black'} size={20} />
            ),
          }}
          component={History}
          name="history"
        />
        <BottomTab.Screen
          options={{
            title: 'Profile',
            tabBarIcon: () => (
              <Icon name="user-circle" color={'black'} size={20} />
            ),
          }}
          component={Profile}
          name="profile"
        />
      </BottomTab.Navigator>
    );
  }
}

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLogin: false,
    }
  }

  login = () => {
    this.setState({isLogin: true})
  } 

  logout = () => {
    this.setState({isLogin: true})
  } 

  render() {
    const {isLogin} = this.state
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {!isLogin && (
            <>
              <Stack.Screen
                component={props => (
                  <LoginScreen {...props} login={this.login} />
                )}
                options={{
                  headerShown: false,
                }}
                name={'login'}
              />
            </>
          )}
          {isLogin && (
            <>
              <Stack.Screen
                options={{headerShown: false}}
                component={Tab}
                name={'main'}
              />
              <Stack.Screen
                options={{title: 'Detail'}}
                component={Details}
                name={'detail'}
              />
              <Stack.Screen
                options={{title: 'Log'}}
                component={LoginScreen}
                name={'logout'}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}