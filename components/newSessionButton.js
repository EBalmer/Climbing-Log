import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements';

export default class NewSessionButton extends Component {

// Example POST method implementation:
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
    return await response.json(); // parses JSON response into native JavaScript objects
  }


handlePress() {
    this.postData('http://192.168.1.97:3000/insert', { date: '27/06/93', routes: ['V16'] })
    .then((data) => {
      console.log(data); // JSON data parsed by `response.json()` call
    });
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