import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text, Card, CardItem} from 'native-base';
import sounds from './sounds/sounds';
import {Col, Row, Grid} from 'react-native-easy-grid';
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
      return <ListItem key={index}>
        <TouchableHighlight onPress={playSound}>
          <View><Text>{soundByte.name}</Text></View>
        </TouchableHighlight>
      </ListItem>;
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderCard()}
        <Image style={styles.image1} source={require('./images/standing.png')}/>
      </View>
    );
  }
  
  render1() {
    return (
      <Container style={styles.container}>
        <Content>
          <Grid>
            <Col>
              {this.renderCard()}
            </Col>
            <Col>
              <Image style={styles.image1} source={require('./images/standing.png')}/>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
  
  renderSongList() {
    return <List>
      {this.generateSoundItems()}
    </List>;
  }
  
  renderCard() {
    return (
      <Container style={styles.listView}>
        <Content>
          <Card>
            <CardItem >
              <Text>Songs</Text>
            </CardItem>
            
            <CardItem cardBody>
              
              {
                this.renderSongList()
              }
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  
  image1: {
    height: 300,
    width: 150
  },
  listView: {
    width: 50
  },
  rightImage: {},
  listItem: {},
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 64
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