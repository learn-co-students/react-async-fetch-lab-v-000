import React, { Component } from 'react';
import ExampleComponent from './components/ExampleComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      astros: []
    }
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json()).then(astrosJSON => this.setState({
        astros: JSON.parse(astrosJSON)
      }))
  }

  render() {
    return(
      this.state.astros.map(astro => <ExampleComponent name={astro.name}/>)
    )
  }
}

export default App;
