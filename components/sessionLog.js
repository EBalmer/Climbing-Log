import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import SessionCard from './sessionCard'

export default class SessionLog extends Component {
    constructor(props) {
        super(props);

        this.state ={
            sessions: []
        }
    }

    getSessionLogs() {
        fetch('http://192.168.1.97:3000/get-log', { method: "GET" })
            .then((response) => {
                return response.json()
            }).then((session) => {
                this.setState({sessions: session})
            })
            .catch((error) => {
                console.log(error)
            }
            );
    }

    componentDidMount() {
        this.getSessionLogs()
    }

    render() {

        return (
            <ScrollView>
                {this.state.sessions.map((session, i) => {
                    return (
                        <SessionCard {...session} key={i} />
                    );
                })}
            </ScrollView>
        );
    }
}