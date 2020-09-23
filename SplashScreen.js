// SplashScreen
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// SplashScreen
export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {
    await performAPICalls();
    await downloadAssets();

    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  };

  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>SplashScreen Demo! 👋</Text>
      </View>
    );
  }
}

// Put any code you need to prepare your app in these functions
async function performAPICalls() {}
async function downloadAssets() {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aabbcc',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

// export default class App extends React.Component {
//   state = {
//     isReady: false,
//   };

//   componentDidMount() {
//     SplashScreen.preventAutoHideAsync();
//   }

//   render() {
//     if (!this.state.isReady) {
//       return (
//         <View style={{ flex: 1 }}>
//           <Image
//             source={require('./assets/images/splash.gif')}
//             onLoad={this._cacheResourcesAsync}
//           />
//         </View>
//       );
//     }

//     return (
//       <View style={{ flex: 1 }}>
//         <Image source={require('./assets/coding.png')} />
//         <Image source={require('./assets/splash1.png')} />
//       </View>
//     );
//   }

//   _cacheSplashResourcesAsync = async () => {
//     const gif = require('./assets/animation1.gif');
//     return Asset.fromModule(gif).downloadAsync();
//   };

//   _cacheResourcesAsync = async () => {
//     SplashScreen.hideAsync();
//     const images = [
//       require('./assets/coding.png'),
//       require('./assets/splash1.png'),
//     ];

//     const cacheImages = images.map(image => {
//       return Asset.fromModule(image).downloadAsync();
//     });

//     await Promise.all(cacheImages);
//     this.setState({ isReady: true });
//   };
// }