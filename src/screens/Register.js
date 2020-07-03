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

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

import bg from '../assets/image/bg.jpg';
import librarylogo from '../assets/image/librarylogo.png'
import user from '../assets/image/user.png'
import email from '../assets/image/email.png'
import pass from '../assets/image/pass.png'

export default class Login extends Component {
  constructor(props){
    super(props)
  }

  login = () => {
    this.props.navigation.navigate('login')
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={'position'} style={loginStyle.parent}>
        <Image source={bg} style={loginStyle.accent1} />
        <View style={loginStyle.accent2}>
          <View style={loginStyle.container}>
            <Image source={librarylogo} style={loginStyle.image} />
            <Text style={loginStyle.text}>Ban's Library</Text>
            <Text style={loginStyle.text2}>Please Register</Text>
          </View>
        </View>
        <View style={loginStyle.form}>
          <View style={loginStyle.formCard}>
            <View>
              <Image source={user} style={loginStyle.imageUser} />
              <TextInput placeholder="Username" style={loginStyle.inputStyle} /> 
              <Image source={email} style={loginStyle.imageEmail} />
              <TextInput placeholder="Email" style={loginStyle.inputStyle} />
              <Image source={pass} style={loginStyle.imagePass} />
              <TextInput
                secureTextEntry={true}
                placeholder="Password"
                style={loginStyle.inputStyle}
              />
            </View>
          </View>
          <View style={loginStyle.link}>
            <TouchableOpacity
              onPress={() => Alert.alert('Regsitered...')}
              style={loginStyle.submit}>
              <Text style={loginStyle.submitText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyle.container2}>
            <TouchableOpacity
              onPress={this.login}
              style={loginStyle.submitRegist}>
              <Text style={loginStyle.textRegister}>Already Have Account ? Please Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const accentHeight = 250;

const loginStyle = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  accent1: {
    position: 'absolute',
    width: deviceWidth,
    height: 800,
    zIndex: 0,
  },
  accentOverlay: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  accent2: {
    height: accentHeight,
    width: deviceWidth,
    position: 'absolute',
    // backgroundColor: '#62725A',
    // backgroundColor: '#1E2C1D',
    zIndex: 2,
    padding: 50,
  },
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 70,
    width: 80,
    height: 80,
  },
  imageUser: {
    position: 'absolute',
    zIndex: 99,
    top: 13,
  },
  imageEmail: {
    position: 'absolute',
    zIndex: 99,
    top: 80,
  },
  imagePass: {
    position: 'absolute',
    zIndex: 99,
    top: 145,
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
  form: {
    position: 'absolute',
    paddingBottom: 140,
    zIndex: 4,
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'flex-end',
  },
  formCard: {
    position: 'relative',
    width: deviceWidth - 90,
    height: 200,
    alignSelf: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  link: {
    marginTop: 50,
    marginBottom: 70,
    paddingRight: 30,
    paddingLeft: 30,
    alignItems: 'baseline',
  },
  forgotPassword: {
    color: '#FFF',
    fontWeight: 'bold',
    letterSpacing: 3,
    marginLeft: 30,
    bottom: 25,
  },
  inputWrapper: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  inputLabel: {
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
  submit: {
    position: 'absolute',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -60,
    right: 50,
    backgroundColor: '#F69470',
    borderRadius: 7,
  },
  submitText: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFF',
  },
  textRegister: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize: 15,
  },
  inputStyle: {
    marginTop: 15,
    marginLeft: 40,
    width: 258,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  submitRegist: {
    position: 'absolute',
    bottom: -150,
    right: 70,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderRadius: 7,
  },
});
