// create your App component here
import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json=> console.log(json.people))
    }

    render() {
        return(
            <h4></h4>
        )
    }
}

export default App;