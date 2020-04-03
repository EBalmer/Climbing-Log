import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { VictoryPie, VictoryLabel } from "victory-native";
import { countGrades } from '../utils/helpers'
import {Svg} from 'react-native-svg'

export default class GradesDonutChart extends Component {

    render() {
        return (
            <Svg viewBox="0 0 400 400">
                <VictoryPie
                    colorScale={["gold", "cyan", "navy"]}
                    data={
                        countGrades(this.props.routeLog)
                    }
                    radius={this.props.rad}
                    innerRadius={this.props.innerRad}
                    labels={() => null}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 20 }}
                    x={200} y={200}
                    text={this.props.routeLog.length}
                />
            </Svg>
        );
    }
}