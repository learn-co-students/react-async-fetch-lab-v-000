import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(json => this.setState({ people: json }));
  }


  render() {
    return (
      <div>

      </div>
    )
  }
}


export default App;