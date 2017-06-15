import React, { Component } from 'react'
import { Picker, StyleSheet, TouchableOpacity, View, Image } from 'react-native'

import Classes from '../assets/data/classes'

import Label from './Label'

export default class StartingClass extends Component {
  render () {

    let classes = Object.keys(Classes).map((c) => ({
      label: c.charAt(0).toUpperCase() + c.slice(1),
      value: c
    }))

    return (
      <View style={styles.container}>
        <View style={styles.label}>
          <Label text='Class'/>
        </View>
        <View style={styles.picker}>
          <TouchableOpacity onPress={this.props.onPress}>
            <View style={{borderBottomWidth: .5, borderColor: '#d1caa7', padding: 4}}>
              <Label text={this.props.value}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  label: {
    flex: 1,
    justifyContent: 'center'
  },
  picker: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
})
