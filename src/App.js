import React, { Component } from 'react';

class App extends Component {

    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                people: data.people
            })
        })
    }

    render() {
        return (
            <div>
                <h1>
                    People currently in Space:
                </h1>
                <ul>
                {this.state.people.map(person => 
                    <li>{person.name}</li>
                    )}
                </ul>
            </div>
        )
    }

}

export default App;
