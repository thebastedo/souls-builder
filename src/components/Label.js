import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

export default class Label extends Component {
  render () {
    return (
      <Text style={styles.label}>{this.props.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  label: {
      color: '#d1caa7'
  }
})
