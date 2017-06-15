import React, { Component } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import SimplePicker from 'react-native-simple-picker'

import StartingClass from './components/StartingClass'
import Level from './components/Level'
import Stat from './components/Stat'
import ComputedStat from './components/ComputedStat'

import { hitpoints } from './common/hitpoints'
import { focuspoints } from './common/focuspoints'
import { stamina } from './common/stamina'

import Classes from './assets/data/classes'

import { icons } from './assets/icons'

const Stats = ['vigor', 'attunement', 'endurance', 'vitality', 'strength', 'dexterity', 'intelligence', 'faith', 'luck']

export default class SoulsBuilder extends Component {
  constructor (props) {
    super(props)

    let startingClass = 'knight'
    let [level, vigor, attunement, endurance, vitality, strength, dexterity, intelligence, faith, luck] = Classes[startingClass]

    this.state = {
      startingClass,
      level,
      vigor,
      attunement,
      endurance,
      vitality,
      strength,
      dexterity,
      intelligence,
      faith,
      luck
    }
  }

  decrementStat = (stat) => {
    let newValue = this.state[stat]-1
    let startingValue = Classes[this.state.startingClass][Stats.indexOf(stat)+1]
    if (newValue >= startingValue) {
      this.setState({[stat]: this.state[stat]-1, level: this.state.level-1})
    }
  }

  incrementStat = (stat) => {
    let newValue = this.state[stat]+1
    if (newValue <= 99) {
      this.setState({[stat]: this.state[stat]+1, level: this.state.level+1})
    }
  }

  showClassPicker = () => {
    this.refs.classPicker.show()
  }

  selectStartingClass = (startingClass) => {
    let [level, vigor, attunement, endurance, vitality, strength, dexterity, intelligence, faith, luck] = Classes[startingClass]
    this.setState({startingClass, level, vigor, attunement, endurance, vitality, strength, dexterity, intelligence, faith, luck})
  }

  render () {
    let hp = hitpoints(this.state.vigor)
    return (
      <View style={styles.container}>
        <View style={styles.stats}>
          <View style={styles.topStats}>
            <StartingClass value={this.state.startingClass} onPress={this.showClassPicker}/>
            <ComputedStat name='Hit Points' icon={icons.hitpoints} value={`${hp[0]} (${hp[1]})`}/>
            <ComputedStat name='Focus Points' icon={icons.focuspoints} value={focuspoints(this.state.attunement)}/>
            <ComputedStat name='Stamina' icon={icons.stamina} value={stamina(this.state.endurance)}/>
            <ComputedStat name='Level' icon={icons.level} value={this.state.level}/>
          </View>
          <View style={styles.bottomStats}>
            <ScrollView style={{flex: 1}}>
              {Stats.map((stat) => (
                <Stat
                  key={stat}
                  name={stat}
                  icon={icons[stat]}
                  value={this.state[stat]}
                  onIncrement={this.incrementStat.bind(this, stat)}
                  onDecrement={this.decrementStat.bind(this, stat)}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <SimplePicker
          ref={'classPicker'}
          options={Object.keys(Classes)}
          onSubmit={this.selectStartingClass}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  stats: {
    flex: 1,
    padding: 4,
    margin: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d1caa7',
  },

  topStats: {
    flex: 0,
    height: 130,
    paddingBottom: 4,
    borderColor: '#d1caa7',
    borderBottomWidth: .5
  },

  bottomStats: {
    flex: 2,
  }
})
