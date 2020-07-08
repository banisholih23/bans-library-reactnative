import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView, FlatList
} from 'react-native';

import bg from '../assets/image/bg.jpg';
import cover from '../assets/image/sangpemimpi.jpg'

import { connect } from 'react-redux'
import { postTransactions } from '../redux/actions/transactions'
import { getBook } from '../redux/actions/book'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const API_URL = 'http://192.168.1.16:5000/'

class Details extends Component {
  constructor(props) {
    super(props)
    console.log('ini props', props)
    this.state = {
      id: this.props.route.params.item.id,
      user_id: this.props.auth.dataLogin.data.id,
      token: this.props.auth.dataLogin.data.token,
      book_title: this.props.route.params.item,
    }
  }

  toggleBorrow = () => {
    const { book_title } = this.props.route.params.item
    Alert.alert(
      `Are You Sure to Borrow ${book_title} book?`,
      "Be carefully.. read and enjoy it",
      [
        {
          text: '',
        },
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: this.borrowBook
        }
      ],
      { cancelable: false }
    )
  }

  borrowBook = () => {
    const { token } = this.state
    const data = {
      book_id: this.state.id,
      user_id: this.state.user_id
    }
    this.props.postTransactions(data, token).then((response) => {
      Alert.alert('Congratulations Borrow Book Success!!')
      this.props.navigation.navigate('usermenu')
    }).catch(function (error) {
      Alert.alert('something erorr!')
    })
  }

  render() {
    const { book_title, book_author, book_genre, book_status, book_desc, image } = this.props.route.params.item
    console.log(`${API_URL}${image}`)
    return (
      <KeyboardAvoidingView behavior={'position'} style={detailStyle.parent}>
        <Image source={bg} style={detailStyle.accent1} />
        <View style={detailStyle.accentOverlay} />
        <View style={detailStyle.headerText}>
          <Text style={detailStyle.textDetail}>Detail Book</Text>
        </View>
        <View style={detailStyle.accent2}>
          <View style={detailStyle.container}>
            <Image source={{ uri: `${API_URL}${image}` }} style={detailStyle.image} />
            <Text style={detailStyle.text}>{book_title}</Text>
            <Text style={detailStyle.text2}>{book_author}</Text>
            <Text style={detailStyle.text2}>{book_status}</Text>
            <Text style={detailStyle.text2}>{book_genre}</Text>
          </View>
        </View>
        <View style={detailStyle.container2}>
          <Text style={detailStyle.text3}>{book_desc}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.toggleBorrow}
            style={detailStyle.borrow}>
            <Text style={detailStyle.submitBorrow}>Borrow Book</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book,
  auth: state.auth
})
const mapDispatchToProps = { getBook, postTransactions }

export default connect(mapStateToProps, mapDispatchToProps)(Details)


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
    textAlign: 'center',
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
    marginTop: 250,
    marginBottom: 10,
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