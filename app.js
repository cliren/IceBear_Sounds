import {
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native';

import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text} from 'native-base';
import sounds from './sounds/sounds';
var Sound = require('react-native-sound');

console.log(Sound);

export default class ListExample extends Component {
  
  playSound(url) {
    let s = new Sound(url, Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        console.log('duration', s.getDuration());
        s.play();
      }
    });
  }
  
  generateSoundItems() {
    return sounds().map((soundByte, index) => {
      let playSound = this.playSound.bind(this, soundByte.url);
      return <ListItem key={index} >
        <TouchableHighlight onPress={playSound}>
          <View><Text>{soundByte.name}</Text></View>
        </TouchableHighlight>
      </ListItem>;
    });
  }
  
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List>
            {this.generateSoundItems()}
          </List>
        </Content>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  
  listItem: {
  },
  container: {
    top: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});