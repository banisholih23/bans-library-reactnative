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

import profile from '../assets/image/profile2.jpg'
import user from '../assets/image/user.png'
import email from '../assets/image/email.png'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Details extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image style={styles.avatar} source={profile} />
        <View style={styles.body}>
          <Image></Image>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Bani Sholih</Text>
            <Text style={styles.info}>This is Your Profile</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
            <View style={styles.formCard}>
              <View>
                <TextInput placeholder="Bani Sholih" style={styles.inputStyle} />
                <Image source={user} style={styles.imageUser} />
                <TextInput placeholder="banisholih@gmail.com" style={styles.inputStyle} />
                <Image source={email} style={styles.imagePass} />
              </View>
            </View>
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('home')}
              style={styles.buttonContainer}>
              <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#723621",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#696969",
  },
  info: {
    fontSize: 16,
    color: "#330F08",
    marginTop: 5
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 70,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 130,
    borderRadius: 30,
    backgroundColor: "#723621",
    elevation: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  formCard: {
    position: 'relative',
    width: deviceWidth - 90,
    height: 200,
    alignSelf: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  imageUser: {
    position: 'absolute',
    zIndex: 99,
    top: 20,
  },
  imagePass: {
    position: 'absolute',
    zIndex: 99,
    top: 90,
  },
  inputStyle: {
    marginTop: 20,
    marginLeft: 40,
    width: 260,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});