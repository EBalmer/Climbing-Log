import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { VictoryPie, VictoryLabel } from "victory-native";
import { countGrades } from '../utils/helpers'
import { Svg } from 'react-native-svg'

export default class GradesDonutChart extends Component {

    render() {

        return (
            <Svg viewBox="0 0 100 100">
                <VictoryPie
                    style={{
                        data: {
                            fill: ({ datum }) => datum.fill
                        }
                    }}
                    data={
                        countGrades(this.props.routeLog)
                    }
                    radius={this.props.rad}
                    innerRadius={this.props.innerRad}
                    labels={() => null}
                    height={100}
                    width={100}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 20 }}
                    x={50} y={50}
                    text={this.props.routeLog.length}
                />
            </Svg>
        );
    }
}