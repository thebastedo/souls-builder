import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import StatIcon from './StatIcon'
import Label from './Label'
import Increment from './Increment'
import Decrement from './Decrement'

export default class Stat extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.label}>
          <StatIcon source={this.props.icon}/>
          <Label text={this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}/>
        </View>
        <View style={styles.stat}>
          <Decrement onDecrement={this.props.onDecrement}/>
          <Text style={{color: '#fff'}}>{this.props.value}</Text>
          <Increment onIncrement={this.props.onIncrement}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  label: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  stat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
})
