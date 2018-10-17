// create your App component here
import React, { Component } from 'react'

class App extends Component {

  state = {
      peopleInSpace: []
  }

  render() {
    return (
      <section>
        <div>
          <h1>Astronauts!</h1>
        </div>
        <div>
          {this.state.peopleInSpace.map((person, id) => <ul><li><h1 key={id}>{person.name}</h1></li></ul>)}
        </div>
      </section>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({people}) => this.setState({ peopleInSpace: people }))

  }

}

export default App
