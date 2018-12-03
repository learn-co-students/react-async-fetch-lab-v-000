// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

    render() {
        return(
            <div>
                <h1>PEOPLE IN SPACE</h1>
                <ol>
                    {this.state.peopleInSpace.map(person => {
                        return <li>{person.name}</li>
                    })}
                </ol>
            </div>
        )
    }
}