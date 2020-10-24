import React, { Component } from 'react';

class App extends Component {

  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        people: data.people
      })
    })
    }

  render() {
    return (
      <div className="App">
        <header>
          <h1>People</h1>
        </header>
        <div>
          {this.state.people.map(person => <div>{person.name}</div>)}
        </div>
      </div>
    );
  }
}

export default App;
