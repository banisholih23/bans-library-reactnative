import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions, TouchableOpacity, 
  ScrollView, Image, FlatList} from 'react-native';
import bg from '../assets/image/bg.jpg';
import { connect } from 'react-redux'

import { getTransactions } from '../redux/actions/transactions'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Transaction extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      isLoading: true,
      data: [],
      currentPage: 1,
      refreshing: false,
    }
  }
  fetchData = () => {
    this.props.getTransactions();
    const { data, isLoading } = this.props.transactions;
    this.setState({ data, isLoading });
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchData(this.state.currentPage).then(() => {
      this.setState({refreshing: false});
    });
  };

  componentDidMount() {
    this.fetchData()
  }

  _renderItem({ item }) {
    return (
      <>
        <View style={style.transactionsList}>
          <TouchableOpacity>
            <Text style={style.bookTitle}>{item.book_title}</Text>
            <Text style={style.bookTitle}>Author: {item.book_author}</Text>
            <Text style={style.bookTitle}>OrderBy: {item.orderBy}</Text>
            <Text style={style.bookTitle}>Status: {item.book_status}</Text>
          </TouchableOpacity>
          <View style={style.badgeWrapper}>
            <TouchableOpacity style={style.badgeWarning}>
              <Text style={style.badgeText}>edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.badgeDanger}>
              <Text style={style.badgeText}>delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.line} />
      </>
    )
  }

  render() {
    const { data, isLoading } = this.state
    return (
      <View style={style.parent}>
        <Image source={bg} style={style.fill}></Image>
        <View style={style.header}>
          <Text style={style.transactions}>Transactions</Text>
          <View style={style.search}>
            <TextInput style={style.searchInput} placeholder='Search...' placeholderTextColor='black'/>
          </View>
        </View>
        <FlatList
          style={style.content}
          data={data}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.id}
          onRefresh={() => this.fetchData()}
          refreshing={isLoading}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions
})
const mapDispatchToProps = {getTransactions}

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
    width: deviceWidth-100,
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
  search: {
    marginTop:10,
    alignItems: 'center'
  },
  searchInput: {
    marginTop: 10,
    width: deviceWidth-120,
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
    width: deviceWidth-30,
    alignSelf: 'center',
    height: 1,
    width: 300,
    backgroundColor: 'white'
  }
});