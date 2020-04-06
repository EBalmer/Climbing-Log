import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class GradePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: 'V1'
        }
    }

    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Picker
                        style={{ height: 50, width: '80%' }}
                        selectedValue={this.state.selectedValue}
                        onValueChange={(itemValue, itemIndex) => this.setState({ selectedValue: itemValue })} >
                        <Picker.Item label='V1' value='V1' />
                        <Picker.Item label='V2' value='V2' />
                        <Picker.Item label='V3' value='V3' />
                        <Picker.Item label='V4' value='V4' />
                        <Picker.Item label='V5' value='V5' />
                        <Picker.Item label='V6' value='V6' />
                        <Picker.Item label='V7' value='V7' />
                        <Picker.Item label='V8' value='V8' />
                        <Picker.Item label='V9' value='V9' />
                        <Picker.Item label='V10' value='V10'/>
                    </Picker>
                    <Button
                        title='Add'
                        onPress={() => this.props.addRoute(this.state.selectedValue)} />
                </View>

            </View>
        );
    }
}