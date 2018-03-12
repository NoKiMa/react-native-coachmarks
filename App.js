/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

import CoachMarks from './source/coachmarks'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topChildView}>
          <Image style={styles.topChildItem}
            source={require('./ic_touch.png')}
          />
          <Image style={styles.topChildItem}
            source={require('./ic_public.png')}
          />
        </View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <View style={styles.bottomChildView}>
          <Image style={styles.bottomChildItem}
            source={require('./ic_laptop.png')}
          />
          <Image style={styles.bottomChildItem}
            source={require('./ic_perm_phone_msg.png')}
          />
          <Image style={styles.bottomChildItem}
            source={require('./ic_person.png')}
          />
          <Image style={styles.bottomChildItem}
            source={require('./ic_skip_next.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop:100,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bottomChildView: {
    flexDirection: 'row',
    top: height / 2 - 40,
  },
  bottomChildItem: {
    width: 60,
    height: 60,
    margin: 5,
  },
  topChildView: {
    flexDirection: 'row',
    top: 30,
    width: width,
    justifyContent: 'flex-end',
  },
  topChildItem: {
    width: 24,
    height: 24,
    margin: 20,
  },
});
