import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SoulsBuilder from './src/index'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SoulsBuilder/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: '#000'
  },
});
