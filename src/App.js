import React, { Component } from 'react';
import Button from './components/Button'
import Greeting from './components/Greeting'
import ExampleComponent from './components/ExampleComponent'

class App extends Component {
  state = {
    peopleInSpace: []
  };

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }

  render() {
    return (
      <div>
        <Button/>
        <Greeting/>
        <ExampleComponent/>
      </div>
    );
  }

}

export default App;
