import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image, Alert, FlatList } from 'react-native';

import { connect } from 'react-redux'
import { patchUser, getUser } from '../redux/actions/users'
import {logout} from '../redux/actions/auth'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/image/bg.jpg';

class Profile extends Component {
  constructor(props) {
    console.log('ini props',props)
    super(props)
    this.state = {
      username: '',
      email: '',
      token: this.props.auth.dataLogin.data.token
    }
  }

  toggleEdit = () => {
    Alert.alert(
      'Are you sure?',
      "Make sure your data is correct",
      [
        {
          text: '',
        },
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'Edit', 
          onPress: this.editUser
      }
      ],
      { cancelable: false }
    )
  }

  editUser = () => {
    const {token} = this.state
    const dataUser = {
      username: this.state.username,
      email: this.state.email,
    }
    const { username, email } = this.state
    if (username == "" || email == "") {
      Alert.alert('Please fill All Column')
    } else {
      this.props.patchUser(`${this.props.route.params.id}`, dataUser, token).then((response) => {
        Alert.alert('Holaaa!! Edit Profile Success Pease Login Again')
        this.logout()
      }).catch(function (error) {
        Alert.alert('Something Wrong!')
      })
    }
  }

  logout = () => {
    this.props.logout()
    this.props.navigation.navigate('login')
  }

  cancelEdit = () => {
    this.props.navigation.navigate('profile')
  }

  render() {
    const {username, email} = this.props.route.params
    return (
      <View style={style.parent}>
        <Image source={bg} style={style.fill}></Image>
        <View style={style.header}>
          <Text style={style.text}>Edit Profile</Text>
        </View>
        <View style={style.form}>
          <TextInput
          onChangeText={(e) => { this.setState({ username: e }) }} style={style.formInput} placeholder='username' placeholderTextColor='black'
          defaultValue={username} />
          <TextInput
          onChangeText={(e) => { this.setState({ email: e }) }} style={style.formInput} placeholder='email' placeholderTextColor='black'
          defaultValue={email} />
        </View>
        <View style={style.line} />
        <View style={style.addBtnWrapper}>
          <TouchableOpacity onPress={this.toggleEdit} style={style.addBtn}>
            <Text style={style.addBtntext}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.cancelEdit} style={style.addBtnCancel}>
            <Text style={style.addBtntext}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {patchUser, getUser, logout}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const style = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  fill: {
    position: 'absolute',
    width: deviceWidth,
    height: 800
  },
  header: {
    width: deviceWidth - 100,
    height: 30,
    alignSelf: 'center',
    marginTop: 200
  },
  text: {
    marginTop: 30,
    fontSize: 35,
    letterSpacing: 3,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
  },
  badgeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  formInput: {
    width: deviceWidth - 100,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'black',
    marginTop: 10
  },
  badgeWarning: {
    width: 50,
    height: 25,
    backgroundColor: '#F8B500',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  badgeDanger: {
    width: 50,
    height: 25,
    backgroundColor: '#c62828',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    elevation: 10,
  },
  badgeText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
    textTransform: 'uppercase'
  },
  badgeTextDel: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  search: {
    marginTop: 10,
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: 'white',
    height: 35,
    width: deviceWidth - 120,
    fontSize: 10,
    borderRadius: 10,
    paddingLeft: 30,
    elevation: 20,
  },
  content: {
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 335,
    height: deviceHeight,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  transactionsList: {
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bookTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  addBtnWrapper: {
    width: deviceWidth,
    backgroundColor: 'transparent',
  },
  addBtn: {
    marginTop: 30,
    marginBottom: 10,
    width: 120,
    height: 40,
    elevation: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 10
  },
  addBtnCancel: {
    marginBottom: 20,
    width: 120,
    height: 40,
    elevation: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 10
  },
  addBtntext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  line: {
    width: deviceWidth - 30,
    alignSelf: 'center',
    height: 1,
    width: 300,
    backgroundColor: 'white'
  }
});