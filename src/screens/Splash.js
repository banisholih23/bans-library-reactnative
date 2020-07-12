import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import SpalshIcon from '../assets/image/banslibrary.png'

class Splash extends Component {
  state = {
    limit: 4,
  };

  async componentDidMount() {
    const data = await this.navigateToHome();
    if (data !== null) {
      this.props.navigation.navigate('landingPage');
    }
  }

  navigateToHome = async () => {
    const wait = time => new Promise(resolve => setTimeout(resolve, time));
    return wait(2000).then(() => this.props.navigation.navigate('landingPage'));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar showHideTransition="fade" />
        <Image style={styles.image} source={SpalshIcon} />
      </View>
    );
  }
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
