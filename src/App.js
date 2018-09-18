// create your App component here
import React , { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            peopleInSpace: [],
        }
    }
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(resp => this.setSTate({ peopleInSpace: resp }))
    }
    render() {
        return (
            <div>{this.state.peopleInSpace.map(people => {
            people.name})}</div>
            )
        
    }
}

export default App