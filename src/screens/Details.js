import React, { Component } from 'react';
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
import librarylogo from '../assets/image/librarylogo.png'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Details extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior={'position'} style={detailStyle.parent}>
        <Image source={bg} style={detailStyle.accent1} />
        <View style={detailStyle.accent2}>
          <View style={detailStyle.container}>
            <Image source={librarylogo} style={detailStyle.image} />
            <Text style={detailStyle.text}>Koala Kumal</Text>
            <Text style={detailStyle.text2}>Raditya Dika</Text>
          </View>
        </View>
        <View style={detailStyle.container2}>
          <Text style={detailStyle.text3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const accentHeight = 250

const detailStyle = StyleSheet.create({
  accent1: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
    zIndex: 0,
  },
  accent2: {
    height: accentHeight,
    width: deviceWidth,
    position: 'absolute',
    zIndex: 2,
    padding: 50,
  },
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 70,
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 10,
    fontSize: 30,
  },
  text2: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 5,
    fontSize: 15,
  },
  text3: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 5,
    bottom: -270,
    fontSize: 15,
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: accentHeight,
    width: deviceWidth,
  },
})