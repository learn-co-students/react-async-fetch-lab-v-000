import React, { Component } from 'react'

class App extends Component {
//Create a functional App component from scratch
//Write a componentDidMount method. Inside the method, send a fetch request to http://api.open-notify.org/astros.json, a free API that returns a list of people currently in space.
  state = {
    peopleInSpace: []
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({ people }) => this.setState({ peopleInSpace: people }))
  }
}
export default App