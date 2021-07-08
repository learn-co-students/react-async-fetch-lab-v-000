import React, { Component } from 'react'

export default class App extends Component {

    state = {
        response: [],
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(json => this.setState({ response: json }))
    }

    render() {
        console.log(this.state.response)
        const people = this.state.response.people;
        return (
            
            <div>
                {people ? people.map((person,index) => {
                    return (<p key={index}>{`${person.name} is currently on ${person.craft}.`}</p>)
                }) : null }
            </div>
        )
    }
}
