import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'

export default class StatIcon extends Component {
  render () {
    return (
      <Image source={this.props.source} style={styles.icon}/>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 4,
    width: 18,
    height: 18 
  }
})
