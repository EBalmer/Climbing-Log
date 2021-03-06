const sessions = [
    {
        date: '21/01/20',
        routes: ['V1', 'V1', 'V1', 'V1', 'V1', 'V1', 'V1', 'V1', 'V1']
    },
    {
        date: '25/01/20',
        routes: ['V1', 'V2', 'V2', 'V6', 'V5', 'V3', 'V2', 'V8', 'V1']
    }, 
    {
        date: '31/01/20',
        routes: ['V1']
    }, 
    {
        date: '5/02/20',
        routes: ['V8','V8']
    }, 
    {
        date: '20/03/20',
        routes: ['V1', 'V2','V1']
    }, 
    {
        date: '28/04/20',
        routes: ['V6', 'V5', 'V3', 'V2', 'V8', 'V1']
    }
]

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

export default class SessionLog extends Component {
    render() {
        return (
            <ScrollView>
            {sessions.map((session, i) => {
                return (
                    <Card key={i}>
                        <View>
                            <Text>
                                {session.date}
                            </Text>
                            {session.routes.map((route, i) => {
                                return (
                                    <Text key={i}>
                                        {route}
                                    </Text>
                                );
                            }
                            )}
                        </View>
                    </Card>
                );
            }
            )}
            </ScrollView>
        );
    }
}