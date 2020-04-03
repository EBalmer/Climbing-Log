import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { VictoryPie } from "victory-native";
import { countGrades } from '../utils/helpers'

export default class gradesDonutChart extends Component {

    render() {
        return (
            <VictoryPie
            colorScale={[ "gold", "cyan", "navy" ]}
            data={
                countGrades(['V1', 'V1','V2'])
            }
            innerRadius={100}
        />
        );
    }
}