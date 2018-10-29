// create your App component here
import React, {Component} from 'react';
import Greeting from './components/Greeting';
import Example from './components/ExampleComponent';

class App extends Component {
  state = {
    peopleInSpace: []
  }
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {this.setState({
        peopleInSpace: data.people
      })
    })
  }
  render () {
    return (
      <div>
      {this.state.peopleInSpace.map(person => <h1 key={person.id}>{person.name}</h1>)}
      </div>
    )
  }
}

export default App;
