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

export default class Dashboard extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior={'position'} style={dashboardStyle.parent} >
        <Image source={bg} style={dashboardStyle.accent1} />
        <View style={dashboardStyle.accent2}>
          <View style={dashboardStyle.textGood}>
            <Text style={dashboardStyle.text}>Good</Text>
            <Text style={dashboardStyle.text2}>Afternoon,</Text>
            <Text style={dashboardStyle.text3}>Bani Sholih</Text>
          </View>
        </View>
        <View style={dashboardStyle.form}>
          <View style={dashboardStyle.formInput}>
            <TextInput placeholder="Search" style={dashboardStyle.inputStyle} />
          </View>
        </View>
        <View>
          <Text style={dashboardStyle.textBook}>List Books</Text>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const dashboardStyle = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  accent1: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
    zIndex: 0,
  },
  accent2: {
    height: 250,
    width: deviceWidth,
    position: 'absolute',
    zIndex: 2,
    marginTop: 55,
    padding: 20,
  },
  textGood: {
    flex: 3,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 10,
    fontSize: 25,
  },
  text2: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize: 25,
  },
  text3: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 10,
    fontSize: 30,
  },
  inputStyle: {
    marginTop: 220,
    marginLeft: 20,
    width: 340,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 10,
    backgroundColor: '#fff',
  },
  form: {
    position: 'absolute',
    zIndex: 4,
    justifyContent: 'flex-end',
  },
  formInput: {
    position: 'relative',
    paddingTop: 10,
    paddingBottom: 50,
  },
  list: {
    height: 250,
    width: deviceWidth,
    position: 'absolute',
    zIndex: 2,
    marginTop: 20,
    padding: 40,
  },
  textBook: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginLeft: 30,
    bottom: -300,
    fontSize: 25,
  }
})
