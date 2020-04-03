import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements';
import NewSessionModal from './newSessionModal';
import { View } from 'react-native';
import { test } from '../utils/helpers'

export default class NewSessionButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      routeLog: []
    }
  }

  handlePress() {
    this.setState(
      { modalVisible: true }
    )
  }

  onSubmit = ((session) => {
    this.setState(
      { modalVisible: false }
    )
    this.props.dataFeed(session)
  })

  onCancel = (() => {
    this.setState(
      { modalVisible: false }
    )
  })

  render() {

    return (
      <View>
        <NewSessionModal isVisible={this.state.modalVisible} onSubmit={this.onSubmit} onCancel={this.onCancel}/>
        <Button
          onPress={() => this.handlePress()}
          icon={
            <Icon
              name="add"
              size={25}
              color="white"
            />
          }
        />
      </View>
    );
  }
}