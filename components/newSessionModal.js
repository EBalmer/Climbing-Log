import React, { Component } from 'react';
import { Modal, Text, View } from 'react-native';
import { Button, ListItem, Badge } from 'react-native-elements';
import GradePicker from './gradePicker';
import GradesDonutChart from './gradesDonutChart';

export default class NewSessionModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            routeLog: []
        }
    }

    addRoute = ((route) => {
        let newRouteLog = this.state.routeLog.concat(route)
        this.setState({
            routeLog: newRouteLog
        })
    })

    submitNewSession() {
        this.props.onSubmit({ date: new Date().toDateString(), routes: this.state.routeLog })
        this.setState({
            routeLog: []
        })
    }

    render() {
        return (
            <Modal
                visible={this.props.isVisible}
                animationType='fade'>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'space-between'
                    }}>
                    <View style={{
                        flex: 5
                    }}>
                        <GradePicker addRoute={this.addRoute} />
                        <GradesDonutChart 
                        routeLog = {this.state.routeLog}
                        rad={80}
                        innerRad={100} />
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }}>
                        <Button
                            title='Submit'
                            onPress={() => this.submitNewSession()} />
                        <Button
                            title='Cancel'
                            onPress={() => this.props.onCancel()} />
                    </View>
                </View>
            </Modal>
        );
    }
}