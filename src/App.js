// create your App component here
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      response: []
    }
  }
  // state = {
  //   response: []
  // }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json').then(response => {
      return response.json();
    }).then(myJson => {
      this.setState({
        response: myJson.people
      })
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.response.map(person => <li key={person.name.toString()}> {person.name} </li>)}
        </ul>
      </div>
    )
  }

}

export default App;
