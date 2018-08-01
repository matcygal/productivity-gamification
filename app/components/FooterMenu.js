import React from 'react';
import { StyleSheet } from 'react-native';

import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
export default class FooterMenu extends React.Component {
  render() {
    return (
    <Footer>
      <FooterTab>
          <Button vertical>
            <Icon type="MaterialCommunityIcons" name="home-variant" />
            <Text>Home</Text>
          </Button>
          <Button vertical>
            <Icon type="MaterialCommunityIcons" name="infinity" />
            <Text>Habits</Text>
          </Button>
          <Button vertical active>
            <Icon active type="MaterialCommunityIcons" name="certificate" />
            <Text>Goals</Text>
          </Button>
          <Button vertical>
            <Icon type="MaterialCommunityIcons" name="checkbox-multiple-marked-circle-outline" />
            <Text>Tasks</Text>
          </Button>
      </FooterTab>
  </Footer>
    );
  }
}

const styles = StyleSheet.create({
  Footer: {
    backgroundColor: '#0173c7',
  },
  footerText: {
    color: '#fff',
  },
  footerIcon: {
    color: '#fff',
  },
});