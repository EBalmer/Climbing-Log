import React, { Component } from 'react';
import { Modal, Text, Picker } from 'react-native';
import { Button } from 'react-native-elements';
export default class NewSessionModal extends Component {

    render() {
        return (
            <Modal
                visible={this.props.isVisible}
                animationType='fade'
            >
                <Text>New Session</Text>
                <Picker>
                    <Picker.Item label='V1' value='v1' />
                    <Picker.Item label='V2' value='v2' />
                    <Picker.Item label='V3' value='v3' />
                    <Picker.Item label='V4' value='v4' />
                    <Picker.Item label='V5' value='v5' />
                    <Picker.Item label='V6' value='v6' />
                    <Picker.Item label='V7' value='v7' />
                    <Picker.Item label='V8' value='v8' />
                    <Picker.Item label='V9' value='v9' />
                    <Picker.Item label='V10' value='v10' />
                </Picker>
                <Button
                    title='Submit'
                    onPress={() => this.props.onSubmit({ date: '27/06/93', routes: ['V16'] })} />
            </Modal>
        );
    }
}