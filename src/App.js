import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json', {
            method: 'GET'
        }).then(res => res.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

    render() {
        return (
            this.state.peopleInSpace.map(person => 
                <ul>
                <li>Name:  {person.name}</li>
                <li>Craft:  {person.craft}</li>
                </ul>
            )
        )
    }

    showResults = () => {
        
    }
}

export default App