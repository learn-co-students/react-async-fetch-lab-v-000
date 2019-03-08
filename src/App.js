import React, { Component } from 'react';

class App extends Component {

  state = {
    peopleInSpace: []
  }

  render() {
    return(
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
        {this.state.peopleInSpace.map(person => <h3>Craft: {person.craft}</h3>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => this.setState({ peopleInSpace: data.people }))
  }

}

export default App;
