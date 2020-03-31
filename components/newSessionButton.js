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

  async postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.text();
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
    this.logSession(session)
  })

  logSession(session) {
    this.postData('http://192.168.1.97:3000/insert', session)
    .then((response) => {
      console.log('Session Sent')
    })
    .catch((err) => {
      console.log(err)
    });
  }

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