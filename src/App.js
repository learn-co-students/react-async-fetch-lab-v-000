import React, { Component } from 'react'

class App extends Component {
    state = {
        peopleInSpace: []
    }

    componentDidMount() {

        const url = "http://api.open-notify.org/astros.json"

        fetch(url)
        .then(resp => resp.json())
        .then(data => console.log(data))
    };

    render(){
        return (
            <div>
                {this.state.peopleInSpace.map(person => person.name)}
            </div>
        )

    }

};



export default App
