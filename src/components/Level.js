import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import StatIcon from './StatIcon'
import Label from './Label'
import { level } from '../assets/icons'

export default class Level extends Component {
  render () {
    return (
      <View style={styles.container}>
          <View style={styles.label}>
            <StatIcon source={level}/>
            <Label text='Level'/>
          </View>
          <View style={styles.level}>
            <Label text={this.props.value}/>
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
  level: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
})
