import React from 'react';
import { View, Text,Image,LogBox } from 'react-native';
import {windowWidth,windowHeight} from '../utils/Dimensions';

class SplashScreen extends React.Component {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    LogBox.ignoreLogs(['Warning: ...']);

    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
          <Image source={require('../assets/images/splash_image.jpeg')}
          width={windowWidth}
          height={windowHeight} />
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen;