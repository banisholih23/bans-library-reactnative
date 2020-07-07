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

import { connect } from 'react-redux'
import {postTransactions} from '../redux/actions/transactions'
import {getBookById, getBook} from '../redux/actions/book'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Details extends Component {
  constructor(props){
    super(props)
    console.log('ini props',props)
    this.state = {
      id: this.props.route.params.id,
      user_id: this.props.auth.dataLogin.data.id,
      token: this.props.auth.dataLogin.data.token
    }
  }

  borrowModal = () => {
    Alert.alert(
      'Borrow this book?',
      "Promise me to take the book carefully",
      [
        {
          text: '',
        },
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'OK', 
          onPress: this.borrow 
      }
      ],
      { cancelable: false }
    )
  }

  borrow = () => {
    const {token} = this.state
    const data = {
      book_id: this.state.id,
      user_id: this.state.user_id
    }
    this.props.postTransactions(data, token).then((response) => {
      Alert.alert('Yay! Borrow success','Contact admin for completing transaction ;)')
      this.props.navigation.navigate('usermenu')
    }).catch(function (error) {
      Alert.alert('Oops!', 'Someone has already take this book :(')
    })
  }

  fetchBook = () => {
    const {id} = this.state
    this.props.getBookById(id)
  }

  componentDidMount() {
    this.fetchBook()
  }

  render() {
    const {dataBookId, isLoading} = this.props.book
    return (
      <KeyboardAvoidingView behavior={'position'} style={detailStyle.parent}>
        <Image source={bg} style={detailStyle.accent1} />
        <View style={detailStyle.accentOverlay} />
        <View style={detailStyle.headerText}>
          <Text style={detailStyle.textDetail}>Detail Book</Text>
        </View>
        <View style={detailStyle.accent2}>
          <View style={detailStyle.container}>
            <Image source={{uri: dataBookId.image}} style={detailStyle.image} />
            <Text style={detailStyle.text}>{dataBookId.book_title}</Text>
            <Text style={detailStyle.text2}>{dataBookId.book_author}</Text>
          </View>
        </View>
        <View style={detailStyle.container2}>
          <Text style={detailStyle.text3}>{dataBookId.book_desc}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.borrowModal}
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
const mapDispatchToProps = {getBookById, postTransactions}

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