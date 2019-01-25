import React, { Component } from 'react';

class App extends Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(jsonObject => this.setState({ peopleInSpace: jsonObject.people }))
  }

  render() {
    return (
      <div>
        <h3>List of People in Space</h3>
        <ul>
          {this.state.peopleInSpace.map(personObject => <li key={personObject.name}>{personObject.name}</li>)}
        </ul>
      </div>
    )
  }

}

export default App;
/*
// When I navigate to http://api.open-notify.org/astros.json,
// the JSON response I get back is an object with a key of "people"
// that points to an array of person JSON objects.
// Each person JSON object in this array has 2 key/value pairs for name and craft
*/