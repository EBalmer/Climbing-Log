import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

export default class SessionCard extends Component {

    render() {
        return (
            <Card>
                <ScrollView>
                    <Text>{this.props.date}</Text>
                    {this.props.routes.map((route, i) => {
                        return (
                            <Text key = {i}>{route}</Text>
                        );
                    })}
                </ScrollView>
            </Card>
        );
    }
}