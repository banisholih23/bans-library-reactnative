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
  Button,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import bg from '../assets/image/bg.jpg';
import Catalog from './Catalog'
import Catalog2 from './Catalog2'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { image: require('../assets/image/koala.jpg') },
        { image: require('../assets/image/jensudriman.jpg') },
        { image: require('../assets/image/sangpemimpi.jpg') },
        { image: require('../assets/image/filo.jpg') },
      ],
    };
  }

  logout = () => {
    this.props.navigation.navigate('login')
  }

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
        <View style={dashboardStyle.button}>
          <TouchableOpacity
            onPress={this.logout}
            style={dashboardStyle.buttonContainer}>
            <Text style={dashboardStyle.textTouch}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={dashboardStyle.form}>
          <View style={dashboardStyle.formInput}>
            <TextInput placeholder="Search" style={dashboardStyle.inputStyle} />
          </View>
        </View>
        <View>
          <Text style={dashboardStyle.textBook}>List Books</Text>
        </View>
        <View style={dashboardStyle.button2}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('detail')}
            style={dashboardStyle.buttonContainer}>
            <Text style={dashboardStyle.textTouch}>Details</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={dashboardStyle.marginScroll}>
          <View style={dashboardStyle.scrollView}>
            <Catalog data={this.state.data} dashboardStyle={dashboardStyle} />
          </View>
          <View style={dashboardStyle.listbook}>
            <Text style={dashboardStyle.textScroll}>
              Losasasasrem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const dashboardStyle = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  textScroll: {
    color: 'white',
    fontSize: 42,
  },
  marginScroll: {
    marginTop: 300,
  },
  listbook: {
    marginLeft: 25,
    marginTop: 190,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    backgroundColor: 'white',
    elevation: 5,
  },
  containerImage: {},
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
    width: 350,
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
  button: {
    position: 'absolute',
    zIndex: 5,
    marginTop: -50,
    marginLeft: 290,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    position: 'absolute',
    zIndex: 5,
    marginTop: 470,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  logout: {
    bottom: 50,
    alignItems: 'flex-end',
  },
  styleSubmit: {
    position: 'absolute',
    height: 30,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A10201',
    borderRadius: 10,
  },
  submitLogout: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonContainer: {
    marginTop: 70,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 80,
    borderRadius: 20,
    backgroundColor: "#723621",
    elevation: 5,
  },
  textTouch: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  scrollView: {
    position: 'absolute',
    zIndex: 5,
    marginTop: -40,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView3: {
    // zIndex: 6,
    marginTop: 500,
  },
  scrollView2: {
    position: 'absolute',
    zIndex: 5,
    marginTop: 600,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
