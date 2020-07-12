import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import Page1 from '../assets/image/landing1.png'
import Page2 from '../assets/image/landing2.png'
import Page3 from '../assets/image/landing3.png'

export default class App extends React.Component {
  _onDone = () => {
    this.props.navigation.navigate('login');
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 50,
        }}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  render() {
    return (
      <AppIntroSlider
        data={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderItem={this._renderItem}
        onDone={this._onDone}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 175,
    height: 175,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 30,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Borrow your favorite book',
    image: Page1,
    backgroundColor: '#fff',
  },
  {
    key: 's2',
    text: 'get your mind with so many stories',
    image: Page2,
    backgroundColor: '#fff',
  },
  {
    key: 's3',
    text: 'Get started!',
    image: Page3,
    backgroundColor: '#fff',
  },
];