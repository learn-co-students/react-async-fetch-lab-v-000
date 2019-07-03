// create your App component here
import React, { Component } from 'react';

class App extends Component {

  state = {
    peepsInSpace: []
  }

  render() {
    return (
      <div>
      <h1>List of Peeps in Space</h1>
      {this.state.peepsInSpace.map(person => person.name)}
      </div>
    )
  }
  componentDidMount() {
    console.log(this.state)
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          peepsInSpace: data.people
        })
      })
  }
}

export default App
