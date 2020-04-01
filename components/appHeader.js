import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import NewSessionButton from './newSessionButton'


export default class AppHeader extends Component {

    dataFeed = ((session) => {
        this.props.sessionUpdate(session)
      })

    render() {
        return (
            <Header 
                leftComponent = {{icon: 'menu', color: '#fff'}}
                centerComponent={{text:'Session Log', style: {color:'#fff'}}}
                rightComponent = {<NewSessionButton dataFeed = {this.dataFeed} />}/>
        );
    }
}