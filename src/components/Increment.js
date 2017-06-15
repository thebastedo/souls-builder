import React, { Component } from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default class Decrement extends Component {
  render () {
    return (
      <Button
        onPress={this.props.onIncrement}
        title='+'
        color='#d1caa7'
        accessibilityLabel='Increase'
      />
    )
  }
}

const styles = StyleSheet.create({

})
