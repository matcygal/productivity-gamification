import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Modal, View, TouchableHighlight } from 'react-native';

import HeaderMenu from './HeaderMenu';
import FooterMenu from './FooterMenu';

import { Container, Text, Content, Form, Input, Item, Button, Label, Footer, FooterTab, Icon, Left, Right, Body, Title, Card, CardItem, StyleProvider} from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import * as firebase from 'firebase';


firebase config

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
            modalVisible: false
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

  render() {
    return (
    <StyleProvider style={getTheme(material)}>
        <Container style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          presentationStyle="overFullScreen"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.modal}>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
            <HeaderMenu />
            <ScrollView style={styles.scrollContainer} >
            <Card>
                <CardItem>
                <Body>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at urna diam. Sed et tempor arcu. Aenean finibus sem luctus, convallis mi ut, molestie metus. Aliquam erat volutpat. Integer ornare ipsum aliquam mauris convallis, sed iaculis nisi fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    </Text>
                </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                <Body>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at urna diam. Sed et tempor arcu. Aenean finibus sem luctus, convallis mi ut, molestie metus. Aliquam erat volutpat. Integer ornare ipsum aliquam mauris convallis, sed iaculis nisi fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    </Text>
                </Body>
                </CardItem>
            </Card>
            </ScrollView>
            <FooterMenu />
            <TouchableOpacity style={styles.addButton} onPress={() => {this.setModalVisible(true);}}>
                <Icon type="MaterialIcons" name="note-add" style={styles.addButtonIcon} />
            </TouchableOpacity>
        </Container>
    </StyleProvider>
    );
  }
  addNote() {
      if (this.state.noteText) {
          var d = new Date();
          this.state.noteArray.push({
            'date': d.getFullYear() + "/" +
            (d.getMonth() + 1) + "/" +
            d.getDate(),
            'note': this.state.noteText
          });
          this.setState({ noteArray: this.state.noteArray });
          this.setState({ noteText: '' })
      }
  }
  deleteNote(key) {
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray })
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  scrollContainer: {
    flex: 1,
},
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#0173c7',
      borderTopWidth:2,
      borderTopColor: '#ededed'
  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 75,
      backgroundColor: '#017bd5',
      width: 50,
      height: 50,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 0
  },
  addButtonIcon: {
      color: '#fff',
  },
  modal: {
    height: '90%' ,
    width: '90%',
    marginTop: 22,
    backgroundColor: 'white',
    padding: '2%'
  }
});