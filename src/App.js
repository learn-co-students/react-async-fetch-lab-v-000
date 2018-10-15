// create your App component here
import React, { Component } from 'react';
import Button from './components/Button'
import Greeting from './components/Greeting'
import ExampleComponent from './components/ExampleComponent'

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {this.setState({data: this.arrayIfy(data)})})
  }

  arrayIfy = (object) => {
    return object['people']
  }

  render() {
    return (
      <div>
        <Greeting />
        <ExampleComponent data={this.state.data}/>
        <Button />
      </div>
    )
  }

}

export default App;
