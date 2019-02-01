// create your App component here
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      "something"
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        peopleInSpace: data.people
      })
    })
  }
}

export default App
