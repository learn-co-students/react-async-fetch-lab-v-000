import React, { Component } from 'react';

export default class App extends Component {

    render() {
        
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => {
                data
            })
    }
}