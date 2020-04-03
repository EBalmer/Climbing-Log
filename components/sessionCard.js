import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import GradesDonutChart from './gradesDonutChart'

export default class SessionCard extends Component {

    render() {
        return (
            <Card>
                <ScrollView>
                    <Text>{this.props.date}</Text>
                    <GradesDonutChart 
                    routeLog = {this.props.routes}
                    rad = {50}
                    innerRad = {40} />
                </ScrollView>
            </Card>
        );
    }
}