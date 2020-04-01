import React, { Component } from 'react';
import { View, ScrollView, Modal } from 'react-native';
import { Card } from 'react-native-elements';
import SessionCard from './sessionCard';
import NewSessionModal from './newSessionModal';
import AppHeader from './appHeader';

export default class SessionLog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sessions: [],
            modalVisible: true
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

    getSessionLogs() {
        fetch('http://192.168.1.97:3000/get-log', { method: "GET" })
            .then((response) => {
                return response.json()
            }).then((session) => {
                this.setState({ sessions: session })
            })
            .catch((error) => {
                console.log(error)
            }
            );
    }

    logSession(session) {
        this.postData('http://192.168.1.97:3000/insert', session)
        .then((response) => {
          console.log('Session Sent')
        })
        .catch((err) => {
          console.log(err)
        });
      }

    sessionUpdate = ((session) => {
        let newSessionArray = this.state.sessions.concat(session)
        this.setState(
            { sessions: newSessionArray}
        )
        this.logSession(session)
    })

    componentDidMount() {
        this.getSessionLogs()
    }

    render() {

        return (
            <View>
                <AppHeader sessionUpdate={this.sessionUpdate} />
                <ScrollView>
                    {this.state.sessions.map((session, i) => {
                        return (
                            <SessionCard {...session} key={i} />
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}