import React from 'react';
import { StyleSheet } from 'react-native';

import { Header, Button, Icon, Left, Right, Body, Title} from 'native-base';
export default class HeaderMenu extends React.Component {
  render() {
    return (
    <Header>
      <Left>
        <Button transparent>
          <Icon type="Entypo" name='cog'/>
        </Button>
      </Left>
      <Body>
        <Title style={styles.headerText}>Todo List</Title>
      </Body>
      <Right>
      <Button transparent>
        <Icon type="MaterialCommunityIcons" name='lightbulb'/>
      </Button>
      </Right>
    </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0173c7',
  },
  headerText: {
    color: '#fff',
  },
  headerIcon: {
    color: '#fff',
  },
});