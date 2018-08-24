import React, { Component } from 'react';
export default class App extends Component{

    state = {
        people: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(data => {
          this.setState({
            people: data.people
          })
          debugger
        })
    }

render() {
    return (
        <div>
        {this.state.people.map(person => person.name)}
        </div>
    )
  }
}

