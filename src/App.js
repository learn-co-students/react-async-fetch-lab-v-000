import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(json => console.log(json))
    }

    render() {
        return (
            "loaded"
        )
    }
}

export default App; 