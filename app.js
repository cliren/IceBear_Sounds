import {
  StyleSheet
} from 'react-native';

import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text} from 'native-base';
import sounds from './sounds/sounds';
var Sound = require('react-native-sound');

console.log(Sound);

export default class ListExample extends Component {
  
  playSound(url) {
    let sound = new Sound("./IB_awnyawng.mp3", Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
      } else { // loaded successfully
        console.log('duration in seconds: ' + sound.getDuration() +
          'number of channels: ' + sound.getNumberOfChannels());
      }
    });

    // Play the sound with an onEnd callback
    sound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    sound.setVolume(0.5);
  }
  
  generateSoundItems() {
    return sounds().map((soundByte, index) => {
      let playSound = this.playSound.bind(this, soundByte.url);
      return <ListItem key={index} onPress={playSound}>
        <Text>{soundByte.name}</Text>
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