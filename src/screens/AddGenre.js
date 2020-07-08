import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image, FlatList, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

import { connect } from 'react-redux'

import { postGenre } from '../redux/actions/genre'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/image/bg.jpg';

class Genre extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      created_at: '',
      updated_at: ''
    }
  }

  addGenre = () => {
    const dataPost = {
      name: this.state.name,
      created_at: this.state.created_at,
      updated_at: this.state.updated_at
    }
    const { name, created_at, updated_at } = this.state
    if (name == "" || created_at == "" || updated_at == "") {
      Alert.alert('Please fill All Column')
    } else {
      this.props.postGenre(dataPost).then((response) => {
        Alert.alert('Holaaa!! Add Genre Success..')
        this.props.navigation.navigate('genre')
      }).catch(function (error) {
        Alert.alert('Something Wrong!')
      })
    }
  }

  genre = () => {
    this.props.navigation.navigate('genre')
  }

  render() {
    return (
      <View style={style.parent}>
        <Image source={bg} style={style.fill}></Image>
        <View style={style.header}>
          <Text style={style.text}>Add Genre</Text>
        </View>
        <View style={style.form}>
          <TextInput onChangeText={(e) => { this.setState({ name: e }) }} style={style.formInput} placeholder='Name' placeholderTextColor='black' />
          {/* <TextInput onChangeText={(e) => { this.setState({ created_at: e }) }} style={style.formInput} placeholder='Description' placeholderTextColor='black' />
          <TextInput onChangeText={(e) => { this.setState({ updated_at: e }) }} style={style.formInput} placeholder='Description' placeholderTextColor='black' /> */}
          <TextInputMask
            style={style.textInputMask}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY'
            }}
            value={this.state.created_at}
            onChangeText={created_at => { this.setState({ created_at: created_at }) }}
          />
          <View style={style.line} />
          <TextInputMask
            style={style.textInputMask}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY'
            }}
            value={this.state.updated_at}
            onChangeText={(e) => { this.setState({ updated_at: e }) }}
          />
        </View>
        <View style={style.line} />
        <View style={style.addBtnWrapper}>
          <TouchableOpacity onPress={this.addGenre} style={style.addBtn}>
            <Text style={style.addBtntext}>ADD GENRE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.genre} style={style.addBtnCancel}>
            <Text style={style.addBtntext}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {postGenre}

export default connect(null, mapDispatchToProps) (Genre)

const style = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  textInputMask: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
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