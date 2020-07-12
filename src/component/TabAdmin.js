import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Dashboard from '../screens/DashboardAdmin'
import Profile from '../screens/ProfileAdmin'
import History from '../screens/HistoryTransactions'
import Genre from '../screens/Genre'
import User from '../screens/Users'
import Author from '../screens/Author'

const BottomTab = createBottomTabNavigator();

export default class Tab extends Component {
  render() {
    return (
      <BottomTab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#723621'
          },
          activeTintColor: 'white'
        }}>
        <BottomTab.Screen
          options={{
            title: 'Home',
            tabBarIcon: () => (
              <Icon name="home" color={'white'} size={20} />
            ),
          }}
          component={Dashboard}
          name="home"
        />
        <BottomTab.Screen
          options={{
            title: 'Order',
            tabBarIcon: () => (
              <Icon name="cart-plus" color={'white'} size={20} />
            ),
          }}
          component={History}
          name="history"
        />
        <BottomTab.Screen
          options={{
            title: 'genre',
            tabBarIcon: () => (
              <Icon name="filter" color={'white'} size={20} />
            ),
          }}
          component={Genre}
          name="genre"
        />
        <BottomTab.Screen
          options={{
            title: 'user',
            tabBarIcon: () => (
              <Icon name="user" color={'white'} size={20} />
            ),
          }}
          component={User}
          name="user"
        />
        <BottomTab.Screen
          options={{
            title: 'Author',
            tabBarIcon: () => (
              <Icon name="address-card" color={'white'} size={20} />
            ),
          }}
          component={Author}
          name="author"
        />
        <BottomTab.Screen
          options={{
            title: 'Profile',
            tabBarIcon: () => (
              <Icon name="id-badge" color={'white'} size={20} />
            ),
          }}
          component={Profile}
          name="profile"
        />
      </BottomTab.Navigator>
    );
  }
}