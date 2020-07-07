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

import {withNavigation} from '@react-navigation/compat';
// import { withNavigation } from 'react-navigation';

import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux'

import { getBook } from '../redux/actions/book'

import bg from '../assets/image/bg.jpg';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const API_URL = 'http://192.168.1.16:5000/'

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

  fetchData = async () => {
    await this.props.getBook('?page='.concat(this.state.currentPage));
    const { dataBook, isLoading } = this.props.book;
    this.setState({ dataBook, isLoading });
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData(this.state.currentPage).then(() => {
      this.setState({ refreshing: false });
    });
  };

  showDetails = () => {
    this.props.navigation.navigate('detail')
  }

  logout = (id) => {
    this.props.navigation.navigate('login')
  }

  _renderItem({ item, index }) {
    console.log(`${API_URL}${item.image}`)
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('detail', id)} >
        <View style={dashboardStyle.item}>
        <Image
          style={dashboardStyle.imageContainer}
          source={{ uri: `${API_URL}${item.image}` }}
        />
      </View>
      </TouchableOpacity>
    );
  }

  _renderItemFlat({ item, index }) {
    return (
      <TouchableOpacity onPress={this.showDetails} >
      <View style={homeStyle.item}>
        <View style={homeStyle.pictureWrapper}>
          <Image style={homeStyle.picture} source={{ uri: `${API_URL}${item.image}` }} />
          <Text style={homeStyle.textName}>{item.book_title}</Text>
          <Text style={homeStyle.textGenre}>{item.book_genre}</Text>
          <Text style={homeStyle.textStatus}>{item.book_status}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  }

  logout = (id) => {
    this.props.navigation.navigate('detail', id)
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { dataBook, isLoading } = this.state;
    return (
      <View style={dashboardStyle.parent} >
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
        <View style={dashboardStyle.listbook}>
        <Text style={dashboardStyle.titlelist}>Recomendation</Text>
          <Carousel
            layout={'default'}
            activeSlideAlignment={'center'}
            loop={true}
            enableSnap={true}
            autoplay={true}
            autoplayInterval={3000}
            sliderWidth={deviceWidth}
            sliderHeight={150}
            itemWidth={105}
            data={dataBook}
            renderItem={this._renderItem}
          />
        <Text style={dashboardStyle.titleBook}>List Book</Text>
        </View>
        <TouchableOpacity>

        </TouchableOpacity>
        <FlatList
          style={dashboardStyle.booklist}
          data={dataBook}
          renderItem={this._renderItemFlat}
          key={(item) => item.email}
          onRefresh={() => this.fetchData()}
          refreshing={isLoading}
          numColumns={3}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  book: state.book
})

const mapDispatchToProps = { getBook }

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Dashboard))

const dashboardStyle = StyleSheet.create({
  parent: {
    flex: 1,
    position: 'relative',
  },
  titlebook: {
    fontFamily: "Airbnb Cereal App",
    color: "#4B4C72",
    fontSize: 18,
    fontWeight: "bold"
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
  listBookContent: {
    flexDirection: 'row',
    width: deviceWidth,
    marginTop: 20
  },
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
  titlebook: {
    fontFamily: "Airbnb Cereal App",
    color: "#4B4C72",
    fontSize: 18,
    fontWeight: "bold"
  },
  item: {
    width: 100,
    height: 150,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    // borderRadius: 8,
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'stretch',
    width: 100,
    height: 150,
  },
  booklist: {
    width: deviceWidth,
    height: deviceHeight,
    marginTop: 10,
    marginBottom: 10,
  },
  titlelist: {
    marginBottom: 15,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  titleBook: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
})

const homeStyle = StyleSheet.create({
  item: {
    bottom: 50,
    padding: 4,
    marginLeft: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pictureWrapper: {
    marginTop: 130,
    marginBottom: 20,
    width: 120,
    height: 80,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    height: 170,
    width: 115,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  textName: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  textGenre: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 12,
  },
  textStatus: {
    color: 'yellow',
    fontSize: 14,
  },
});