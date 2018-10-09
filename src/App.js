
// create your App component here
import React, { Component } from 'react'

class App extends Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json').
    then(response => response.json).
    then(response => this.setState({
      peopleInSpace: response.people
    }))
  }

  render(){
    const astrolist = this.state.peopleInSpace.map(pis => <li>{pis.name}</li>)
    return (<ul>{astrolist}</ul>)
  }
}

export default App
