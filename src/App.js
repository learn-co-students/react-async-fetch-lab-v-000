// create your App component here
import React, { Component } from 'react'

class App extends React.Component{
    state = {   
        people:[]
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp=>resp.json())
        .then(json=>this.setState(
            {people: json.people}
        ))
    }

    render(){
        return (
            <div>
                <ul>
                    <h1>People Currently in Space</h1>
                    {this.state.people.map((person,idx)=><li key={idx}> {person.name}</li>)}
                </ul>
            </div>
        )
    }
}
export default App