import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Image, FlatList, Alert} from 'react-native';
import bg from '../assets/image/bg.jpg';
import { connect } from 'react-redux'

import { getTransactionUser, getTransactions, returnTransactions } from '../redux/actions/transactions'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Transaction extends Component {
  constructor(props) {
    super(props)
    console.log('ini props',props)
    this.state = {
      // id: this.props.transactions.dataTransactions.id,
      id: this.props.auth.dataLogin.data.id,
      token: this.props.auth.dataLogin.data.token,
      dataTransactions: [],
      isLoding: true,
      currentPage: 1,
    }
  }

  toggleReturn = (id) => {
    Alert.alert(
      'Are you sure want to return this book?',
      "",
      [
        {
          text: '',
        },
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'Return', 
          onPress: () => this.returnBook(id)
      }
      ],
      { cancelable: false }
    )
  }


  fetchData = () => {
    const {id} = this.state
    this.props.getTransactionUser(id);
    this.setState({ isLoading: false })
  }

  returnBook = (id) => {
    const {token} = this.state
    this.props.returnTransactions(id, token).then((response) => {
      Alert.alert('Congratulations Return Book Success!!')
      this.refreshData()
      this.props.navigation.navigate('menuuser')
    }).catch(function (error) {
      Alert.alert('something erorr!')
    })
  }

  refreshData = () => {
    this.fetchData()
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { dataTransactionsUser, isLoading } = this.props.transactions
    return (
      <View style={style.parent}>
        <Image source={bg} style={style.fill}></Image>
        <View style={style.header}>
          <Text style={style.transactions}>Transactions</Text>
          <View style={style.search}>
            <TextInput style={style.searchInput} placeholder='Search...' placeholderTextColor='black' />
          </View>
        </View>
        <FlatList
          style={style.content}
          data={dataTransactionsUser}
          // renderItem={this._renderItem}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={style.transactionsList}>
                <TouchableOpacity>
                  <Text style={style.bookTitle}>{item.book_title}</Text>
                  <Text style={style.bookAuthor}>Author: {item.book_author}</Text>
                  <Text style={style.bookStatus}>Status: {item.book_status}</Text>
                </TouchableOpacity>
                <View style={style.badgeWrapper}>
                  <TouchableOpacity onPress={() => this.toggleReturn(item.id)} style={style.badgeReturn}>
                    <Text style={style.badgeText}>Return</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={style.line} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          onRefresh={() => {this.refreshData()}}
          refreshing={isLoading}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions,
  auth: state.auth
})
const mapDispatchToProps = { getTransactionUser, getTransactions, returnTransactions }

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)

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
    height: 150,
    alignSelf: 'center',
    marginTop: 20
  },
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topNavText: {
    color: 'white',
    marginLeft: 4,
    marginRight: 4,
    fontSize: 15,
    fontWeight: 'bold'
  },
  transactions: {
    marginTop: 20,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
  },
  badgeWrapper: {
    // marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeReturn: {
    bottom: 40,
    width: 70,
    height: 30,
    backgroundColor: '#1AA3E9',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  badgeText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
    textTransform: 'uppercase'
  },
  search: {
    marginTop: 10,
    alignItems: 'center'
  },
  searchInput: {
    marginTop: 10,
    width: deviceWidth - 120,
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: '#fff',
  },
  content: {
    marginLeft: 30,
    marginRight: 20,
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
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Georgia'
  },
  bookAuthor: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
    fontFamily: 'Georgia'
  },
  bookOrderBy: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Georgia'
  },
  bookStatus: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
    fontFamily: 'Georgia'
  },
  bookDate: {
    color: 'white',
    fontSize: 12
  },
  author: {
    color: 'white',
    fontSize: 12
  },
  status: {
    color: 'white',
    fontSize: 12
  },
  orderBy: {
    color: 'white',
    fontSize: 12
  },
  bookStatus: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
    fontFamily: 'Georgia',
    justifyContent: 'center'
  },
  bookReturnBadge: {
    marginTop: 20,
    width: 80,
    height: 35,
    backgroundColor: '#1AA3E9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookStatusText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  line: {
    width: deviceWidth - 30,
    alignSelf: 'center',
    height: 1,
    width: 300,
    backgroundColor: 'white'
  }
});