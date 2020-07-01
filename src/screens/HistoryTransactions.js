import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import bg from '../assets/image/bg.jpg';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class History extends Component{
  render() {
    return (
      <View>
        <Image source={bg} style={styles.accent1} />
        <View style={styles.accentOverlay} />
        <View style={styles.headerText}>
          <Text style={styles.textDetail}>History Transactions</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  accent1: {
    position: 'absolute',
    zIndex: 0,
    width: deviceWidth,
    height: deviceHeight,
  },
  accentOverlay: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  headerText: {
    // flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDetail: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
})