import React, { Component } from 'react';
import { Modal, Text } from 'react-native';
import { Button } from 'react-native-elements';
export default class NewSessionModal extends Component { 

    render() {
        return (
            <Modal
                visible = {this.props.isVisible}
                animationType = 'fade'
            >
                <Text>This is a modal</Text>
                <Button
                    title='Submit'
                    onPress={() => this.props.onSubmit({ date: '01/06/93', routes: ['V16'] })} />
            </Modal>
        );
    }
}