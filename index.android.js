/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Provider } from 'react-redux';
import { store } from './src/store/index.js';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Route from './src/components/routes.js'
import firebase from './src/firebase'
import { Actions } from 'react-native-router-flux';



export default class touristapp extends Component {

  componentWillMount() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        Actions.App()
      } else {
        // Stay at login screen
        Actions.LogIn()
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('touristapp', () => touristapp);
