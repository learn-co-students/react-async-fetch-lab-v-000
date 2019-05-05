// create your App component here

import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      number: 0,
      people: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => this.setState({number: data.number}))
  }

  render() {
    return (
      <div>
        <h4>People in space: {this.state.number}</h4>
        <p></p>
      </div>
    )
  }
}

export default App;
