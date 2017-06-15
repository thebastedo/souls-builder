import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import StatIcon from './StatIcon'
import Label from './Label'

export default class ComputedStat extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.label}>
          <StatIcon source={this.props.icon}/>
          <Label text={this.props.name}/>
        </View>
        <View style={styles.stat}>
          <Text style={{color: '#fff'}}>{this.props.value}</Text>
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
