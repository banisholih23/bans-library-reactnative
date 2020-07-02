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
import cover from '../assets/image/sangpemimpi.jpg'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Details extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior={'position'} style={detailStyle.parent}>
        <Image source={bg} style={detailStyle.accent1} />
        <View style={detailStyle.accentOverlay} />
        <View style={detailStyle.headerText}>
          <Text style={detailStyle.textDetail}>Detail Book</Text>
        </View>
        <View style={detailStyle.accent2}>
          <View style={detailStyle.container}>
            <Image source={cover} style={detailStyle.image} />
            <Text style={detailStyle.text}>Sang Pemimpi</Text>
            <Text style={detailStyle.text2}>Andrea Hirata</Text>
          </View>
        </View>
        <View style={detailStyle.container2}>
          <Text style={detailStyle.text3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => Alert.alert('Book Borrowed...')}
            style={detailStyle.borrow}>
            <Text style={detailStyle.submitBorrow}>Borrow Book</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const accentHeight = 250

const detailStyle = StyleSheet.create({
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
  accentOverlay: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  accent2: {
    height: accentHeight,
    width: deviceWidth,
    position: 'absolute',
    zIndex: 2,
    padding: 50,
  },
  accent3: {
    height: accentHeight,
    width: deviceWidth,
    position: 'absolute',
    zIndex: 2,
    padding: 20,
  },
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    // flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 180,
  },
  textDetail: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
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
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 5,
    bottom: -330,
    fontSize: 15,
  },
  container2: {
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 20,
    height: accentHeight,
    width: deviceWidth,
  },
  borrow: {
    position: 'absolute',
    width: 150,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -420,
    right: 120,
    backgroundColor: '#F69470',
    borderRadius: 30,
  },
  submitBorrow: {
    fontSize: 17,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFF',
  },
})