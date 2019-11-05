// create your App component here
import React, { Component } from 'react'

export class App extends Component {
  
  state = {
    peopleInSpace: []
  }
  
  render() {
    return (
      <div>
      </div>
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

