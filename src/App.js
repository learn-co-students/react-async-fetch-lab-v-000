
import React, { Component } from 'react'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            spaceOccupants: []
        }
    }


    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(req => req.json())
        .then(({people}) => this.setState({spaceOccupants: people}))
    }

    addNames() {
        return this.state.spaceOccupants.map((person, i) => <p key={i}>{person.name}</p>)
    }

    render() {
        return (
            <div>
                <ul>
                    { this.addNames() }
                </ul>
            </div>
        )
    }
}
