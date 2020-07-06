import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
  BackHandler,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { Card, CardItem, Body } from 'native-base'
import { connect } from 'react-redux'

import { getBook } from '../redux/actions/book'

import bg from '../assets/image/bg.jpg';
import Catalog from './Catalog'
import Catalog2 from './Catalog2'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const API_URL = 'http://192.168.1.16:5000'

class Dashboard extends Component {
  state = {
    visible: true,
    modalIsOpen: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataBook: [],
      pageInfo: {},
      refreshing: false,
      currentPage: 1,
    };
  }

  // UNSAFE_componentWillMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       isLoading: false,
  //     });
  //   }, 3000);
  //   BackHandler.addEventListener('hardwareBackPress', function () {
  //     return true;
  //   });
  // }

  fetchData = async () => {
    await this.props.getBook('?page='.concat(this.state.currentPage));
    const { dataBook, isLoading } = this.props.book;
    this.setState({ dataBook, isLoading });
  }

  nextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 }, () => {
      this.fetchData({ page: this.state.currentPage });
    });
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData(this.state.currentPage).then(() => {
      this.setState({ refreshing: false });
    });
  };

  _renderItem({ item, index }) {
    return (
      <View style={dashboardStyle.item}>
        <Image
          style={dashboardStyle.imageContainer}
          source={{uri: item.image}}
        />
      </View>
    );
  }

  _renderItemFlat({ item, index }) {
    return (
      <View style={homeStyle.item}>
        <View style={homeStyle.pictureWrapper}>
          <Image style={homeStyle.picture} source={{ uri: item.image }} />
        </View>
        <View style={homeStyle.textWrapper}>
          <Text style={homeStyle.textName}>{item.book_title}</Text>
          <Text style={homeStyle.textGenre}>{item.book_genre}</Text>
          <Text style={homeStyle.textStatus}>{item.book_status}</Text>
        </View>
      </View>
    );
  }

  logout = () => {
    this.props.navigation.navigate('login')
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { currentPage, dataBook, isLoading } = this.state;
    return (
      <KeyboardAvoidingView behavior={'position'} style={dashboardStyle.parent} >
        <Image source={bg} style={dashboardStyle.accent1} />
        <View style={dashboardStyle.accent2}>
          <View style={dashboardStyle.textGood}>
            <Text style={dashboardStyle.text}>Good</Text>
            <Text style={dashboardStyle.text2}>Afternoon,</Text>
            <Text style={dashboardStyle.text3}>Bani Sholih</Text>
          </View>
        </View>
        <View style={dashboardStyle.button}>
          <TouchableOpacity
            onPress={this.logout}
            style={dashboardStyle.buttonContainer}>
            <Text style={dashboardStyle.textTouch}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={dashboardStyle.form}>
          <View style={dashboardStyle.formInput}>
            <TextInput placeholder="Search" style={dashboardStyle.inputStyle} />
          </View>
        </View>
        {/* <View style={dashboardStyle.button2}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('detail')}
            style={dashboardStyle.buttonContainer}>
            <Text style={dashboardStyle.textTouch}>Details</Text>
          </TouchableOpacity>
        </View> */}
        {/* <ScrollView style={dashboardStyle.marginScroll}>
          
        </ScrollView> */}
        <View style={dashboardStyle.listbook}>
          <Text style={dashboardStyle.titlelist}>List Book</Text>
          <Carousel
            layout={'default'}
            activeSlideAlignment={'center'}
            loop={true}
            enableSnap={true}
            autoplay={true}
            autoplayInterval={3000}
            sliderWidth={deviceWidth}
            sliderHeight={150}
            itemWidth={100}
            data={this.props.book.dataBook}
            renderItem={this._renderItem}
          />
        </View>
        <FlatList
          style={dashboardStyle.booklist}
          data={dataBook}
          renderItem={this._renderItemFlat}
          key={(item) => item.email}
          onRefresh={() => this.fetchData()}
          refreshing={isLoading}
          onEndReached={this.nextPage}
          onEndReachedThreshold={0.5}
        />
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  book: state.book
})

const mapDispatchToProps = { getBook }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

const dashboardStyle = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  textScroll: {
    color: 'white',
    fontSize: 42,
  },
  marginScroll: {
    marginTop: 300,
  },
  listbook: {
    // zIndex: 5,
    // position: 'absolute',
    marginLeft: 15,
    marginTop: 300,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    backgroundColor: 'white',
    elevation: 5,
  },
  containerImage: {},
  accent1: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
    zIndex: 0,
  },
  accent2: {
    height: 250,
    width: deviceWidth,
    position: 'absolute',
    zIndex: 2,
    marginTop: 55,
    padding: 20,
  },
  textGood: {
    flex: 3,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 10,
    fontSize: 25,
  },
  text2: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize: 25,
  },
  text3: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 10,
    fontSize: 30,
  },
  inputStyle: {
    marginTop: 220,
    marginLeft: 20,
    width: 350,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 10,
    backgroundColor: '#fff',
  },
  form: {
    position: 'absolute',
    zIndex: 4,
    justifyContent: 'flex-end',
  },
  button: {
    position: 'absolute',
    zIndex: 5,
    marginTop: -50,
    marginLeft: 290,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    position: 'absolute',
    zIndex: 5,
    marginTop: 470,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formInput: {
    position: 'relative',
    paddingTop: 10,
    paddingBottom: 50,
  },
  list: {
    height: 250,
    width: deviceWidth,
    position: 'absolute',
    zIndex: 2,
    marginTop: 20,
    padding: 40,
  },
  textBook: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginLeft: 30,
    bottom: -300,
    fontSize: 25,
  },
  logout: {
    bottom: 50,
    alignItems: 'flex-end',
  },
  styleSubmit: {
    position: 'absolute',
    height: 30,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A10201',
    borderRadius: 10,
  },
  submitLogout: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonContainer: {
    marginTop: 70,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 80,
    borderRadius: 20,
    backgroundColor: "#723621",
    elevation: 5,
  },
  textTouch: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  scrollView: {
    position: 'absolute',
    zIndex: 5,
    marginTop: -40,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView3: {
    // zIndex: 6,
    marginTop: 500,
  },
  scrollView2: {
    position: 'absolute',
    zIndex: 5,
    marginTop: 600,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardlistdown: {
    flex: 1,
    width: 130,
    height: 'auto'
  },
  cardlistdowncontainer: {
    height: 195,
  },
  titlebook: {
    fontFamily: "Airbnb Cereal App",
    color: "#4B4C72",
    fontSize: 18,
    fontWeight: "bold"
  },
  item: {
    // zIndex: 7,
    // position: 'absolute',
    width: 100,
    height: 150,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'stretch',
    width: 100,
    height: 150,
  },
  booklist: {
    marginTop: 10,
    marginBottom: 10,
  },
  titlelist: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
})

const homeStyle = StyleSheet.create({
  item: {
    height: 80,
    flexDirection: 'row',
    marginTop: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 30,
    paddingLeft: 30,
  },
  pictureWrapper: {
    width: 70,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    height: 80,
    width: 70,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  textWrapper: {
    color: 'white',
    justifyContent: 'center',
    marginLeft: 10,
    padding: 10,
  },
  textName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textGenre: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 12,
  },
  textStatus: {
    color: 'yellow',
    fontSize: 18,
  },
});