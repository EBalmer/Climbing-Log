import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements';
import NewSessionModal from './newSessionModal';
import { View } from 'react-native';

export default class NewSessionButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
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

  render() {

    return (
      <View>
        <NewSessionModal isVisible={this.state.modalVisible} onSubmit={this.onSubmit} />
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