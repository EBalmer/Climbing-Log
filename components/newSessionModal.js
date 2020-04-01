import React, { Component } from 'react';
import { Modal, Text } from 'react-native';
import { Button } from 'react-native-elements';
import  GradePicker from './gradePicker';

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
        this.props.onSubmit({date: new Date().toDateString(), routes: this.state.routeLog })
        this.setState({
            routeLog: []
        })
    }

    render() {
        return (
            <Modal
                visible={this.props.isVisible}
                animationType='fade'
            >
                <GradePicker addRoute = {this.addRoute} />
                <Button
                    title='Submit'
                    onPress={() => this.submitNewSession()} />
                <Button 
                    title='Cancel'
                    onPress={() => this.props.onCancel()}/>
            </Modal>
        );
    }
}