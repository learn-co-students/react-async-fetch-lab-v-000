// create your App component here
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          craft: "ISS",
          name: "Oleg Kononeko"
        }
      ]
    }
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(data => this.handleFetch(data))
  }

  handleFetch = data => {this.setState({
    people: data.people
  })};

  render() {
    return (
      <div>
        People in space:
        <ul>
          {this.state.people.map(person => {
            return (
              <li> {person.name} </li>
            )
          })}
        </ul>
      </div>
    )
  }

}

export default App
