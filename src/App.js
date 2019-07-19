import React, { Component } from 'react'
 
class App extends Component {
 
  state = {
    peopleInSpace: []
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

  render() {
    return (
      <div>
        <ul>
            <li>{this.state.peopleInSpace.map(person => person.name)}</li>
        </ul>
      </div>
    )
  }
}
 
export default App