import React, { Component } from 'react'
import Person from './Person'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        this.getPeople()
    }

    render() {
        return (<div>{this.displayPeople()}</div>)
    }
    
    getPeople = () => {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(json => this.setState({ peopleInSpace: json.people }))
    }

    displayPeople = () => {
        this.state.peopleInSpace.map((person, i) => {
            console.log(person)
            return <Person name={person.name} key={i} />
        })
    }
    
}