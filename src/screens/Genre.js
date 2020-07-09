import React, { Component } from 'react';
import {
  Text, View, TextInput, StyleSheet, Dimensions, TouchableOpacity,
  Image, FlatList, Alert
} from 'react-native';

import { connect } from 'react-redux'

import { getGenre, deleteGenre } from '../redux/actions/genre'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import bg from '../assets/image/bg.jpg';

class Genre extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataGenre: [],
      currentPage: 1,
      refreshing: false,
    }
  }
  fetchData = () => {
    this.props.getGenre();
    const { dataGenre, isLoading } = this.props.genre;
    this.setState({ dataGenre, isLoading });
  }

  deleteGenre = (id) => {
    this.props.deleteGenre(id).then((response) => {
      Alert.alert('Congratulations Delete Genre Success!!')
      this.props.navigation.navigate('genre')
    }).catch(function (error) {
      Alert.alert('something erorr!')
    })
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData(this.state.currentPage).then(() => {
      this.setState({ refreshing: false });
    });
  };

  editGenre = () => {
    this.props.navigation.navigate('editGenre')
  }

  addGenre = () => {
    this.props.navigation.navigate('addGenre')
  }

  componentDidMount() {
    this.fetchData()
  }
  render() {
    const { dataGenre, isLoading } = this.state
    return (
      <View style={style.parent}>
        <Image source={bg} style={style.fill}></Image>
        <View style={style.header}>
          <Text style={style.transactions}>Genre</Text>
          <View style={style.search}>
            <TextInput style={style.searchInput} placeholder='Search...'
              placeholderTextColor='black' />
          </View>
        </View>
        <FlatList
          style={style.content}
          data={dataGenre}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={style.list}>
                <TouchableOpacity >
                  <Text style={style.titleName}>{item.name}</Text>
                </TouchableOpacity>
                <View style={style.badgeWrapper}>
                  <TouchableOpacity onPress={this.editGenre} style={style.badgeWarning}>
                    <Text style={style.badgeText}>edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.deleteGenre(item.id)} style={style.badgeDanger}>
                    <Text style={style.badgeText}>delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={style.line} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          onRefresh={() => this.fetchData()}
          refreshing={isLoading}
        />
        <View style={style.addBtnWrapper}>
          <TouchableOpacity onPress={this.addGenre} style={style.addBtn}>
            <Text style={style.addBtntext}>ADD GENRE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  genre: state.genre
})
const mapDispatchToProps = { getGenre, deleteGenre }

export default connect(mapStateToProps, mapDispatchToProps)(Genre)

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
    marginTop: 20,
    fontSize: 35,
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
  list: {
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleEmail: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic'
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