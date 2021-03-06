import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import { connect } from 'react-redux'

import { getAuthor, deleteAuthor } from '../redux/actions/author'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/image/bg.jpg';

class Author extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataAuthor: [],
      currentPage: 1,
      refreshing: false,
    }
  }

  fetchData = () => {
    this.props.getAuthor();
    this.setState({ isLoading: false });
  }

  toggleEdit = (id) => {
    Alert.alert(
      'Are you sure want to delete this author?',
      "",
      [
        {
          text: '',
        },
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'Delete', 
          onPress: () => this.deleteAuthor(id)
      }
      ],
      { cancelable: false }
    )
  }

  deleteAuthor = (id) => {
    this.props.deleteAuthor(id).then((response) => {
      Alert.alert('Congratulations Delete Author Success!!')
      this.props.navigation.navigate('author')
      this.refresh()
    }).catch(function (error) {
      Alert.alert('something erorr!')
    })
  }

  refresh = () => {
    this.fetchData()
  }

  cancelEdit = () => {
    this.props.navigation.navigate('author')
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { dataAuthor, isLoading } = this.props.author
    return (
      <View style={style.parent}>
        <Image source={bg} style={style.fill}></Image>
        <View style={style.header}>
          <Text style={style.transactions}>Author</Text>
          <View style={style.search}>
            <TextInput style={style.searchInput} placeholder='Search...'
              placeholderTextColor='black' />
          </View>
        </View>
        <FlatList
          style={style.content}
          data={dataAuthor}
          // renderItem={this._renderItem}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={style.transactionsList}>
                <Text style={style.bookTitle}>{item.name}</Text>
                  {/* <Text style={style.bookTitle}>{item.description}</Text> */}
                <View style={style.badgeWrapper}>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('editAuthor', {
                    id: item.id,
                    name: item.name,
                    description: item.description
                  })}} style={style.badgeWarning}>
                    <Text style={style.badgeText}>edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.toggleEdit(item.id)} style={style.badgeDanger}>
                    <Text style={style.badgeText}>delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={style.line} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          onRefresh={() => {this.refresh()}}
          refreshing={isLoading}
        />
        <View style={style.addBtnWrapper}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('addAuthor')} style={style.addBtn}>
            <Text style={style.addBtntext}>ADD AUTHOR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  author: state.author
})
const mapDispatchToProps = { getAuthor, deleteAuthor }

export default connect(mapStateToProps, mapDispatchToProps)(Author)

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
  transactions: {
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
    marginBottom: 20,
    width: 200,
    height: 40,
    elevation: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A9D39',
    borderRadius: 10
  },
  addBtntext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 3
  },
  line: {
    width: deviceWidth - 30,
    alignSelf: 'center',
    height: 1,
    width: 300,
    backgroundColor: 'white'
  }
});