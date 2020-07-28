import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView, ScrollView
} from 'react-native';

import {Badge} from 'react-native-elements'

import bg from '../assets/image/bg.jpg';

import { connect } from 'react-redux'
import { postTransactions } from '../redux/actions/transactions'
import { getBook } from '../redux/actions/book'
import {API} from 'react-native-dotenv'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Details extends Component {
  constructor(props) {
    super(props)
    console.log('ini props', props)
    this.state = {
      id: this.props.route.params.item.id,
      user_id: this.props.auth.dataLogin.data.id,
      token: this.props.auth.dataLogin.data.token,
      image: this.props.route.params.item.image,
      book_title: this.props.route.params.item,
    }
  }

  render() {
    const { book_title, book_author, book_genre, book_status, book_desc, image} = this.props.route.params.item
    return (
      <KeyboardAvoidingView behavior={'position'} style={detailStyle.parent}>
        <Image source={bg} style={detailStyle.accent1} />
        <View style={detailStyle.accentOverlay} />
        <View style={detailStyle.headerText}>
          <Text style={detailStyle.textDetail}>Detail Book</Text>
        </View>
        <View style={detailStyle.accent2}>
          <View style={detailStyle.container}>
            <Image source={{ uri : `${API}${image}`}} style={detailStyle.image} />
            <Text style={detailStyle.text}>{book_title}</Text>
            <Text style={detailStyle.textAuthor}>{book_author}</Text>
            <Text style={detailStyle.text2}>{book_status}</Text>
            <Badge status="primary" 
            containerStyle={{ position: 'absolute', top: 265, right: 115 }}
            value={<Text style={detailStyle.textBadge}>{book_genre}</Text>} />
          </View>
        </View>
        <ScrollView style={detailStyle.scrollView}>
          <Text style={detailStyle.text3}>{book_desc}</Text>
        </ScrollView>
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
  scrollView: {
    marginTop: 350,
    marginBottom: 120,
    // marginHorizontal: 20
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
    marginTop: 50,
    marginBottom: 10,
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
    marginTop: 130,
    height: 200,
    width: 130
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
  textAuthor: {
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    // marginTop: 5,
    fontSize: 15,
  },
  text2: {
    color: 'yellow',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    // marginTop: 5,
    fontSize: 15,
  },
  textBadge: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    // marginTop: 5,
    fontSize: 15,
  },
  text3: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
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
  viewBorrow: {
    bottom: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  borrow: {
    position: 'absolute',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
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