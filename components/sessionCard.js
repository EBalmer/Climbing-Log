import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import GradesDonutChart from './gradesDonutChart'
import { maxGrade, mode } from '../utils/helpers'

export default class SessionCard extends Component {

    render() {
        return (
            <Card
                title={this.props.date}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <GradesDonutChart
                        routeLog={this.props.routes}
                        rad={50}
                        innerRad={40} />
                    <View style={{
                        flex: 1,
                        padding: 10}}>
                        <Text>Max: {maxGrade(this.props.routes)}</Text>
                    </View>
                </View>
            </Card>
        );
    }
}