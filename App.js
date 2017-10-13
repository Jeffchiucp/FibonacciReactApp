import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'; // import StackNavigator
import Home from "./home"; // import home.js
import NumberView from "./number-view";
// make the navigator component

export default App = StackNavigator({
  Home: { screen: Home },
  NumberView: { screen: NumberView },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
