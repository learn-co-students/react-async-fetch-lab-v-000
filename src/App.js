// create your App component here
import React, { Component } from 'react'

class App extends Component {

  state = {
     
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')

  }

}

export default App