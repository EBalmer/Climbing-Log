import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

export default class SessionCard extends Component {

    render() {
        return (
            <Card>
                <View>
                    <Text>{this.props.date}</Text>
                    {this.props.routes.map((route, i) => {
                        return (
                            <Text key = {i}>{route}</Text>
                        );
                    })}
                </View>
            </Card>
        );
    }
}