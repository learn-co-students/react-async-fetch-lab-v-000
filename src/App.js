import React, { Component } from 'react'

export default class App extends Component {

    state = {
        response: null,
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(json => this.setState({ response: json }))
    }

    render() {
        return (
            <div>
                {this.state.repsonse}
            </div>
        )
    }
}
