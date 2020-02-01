import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements';

export default class NewSessionButton extends Component {

handlePress() {
    alert("Pressed")
}

    render() {
        return (
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
        );
    }
}