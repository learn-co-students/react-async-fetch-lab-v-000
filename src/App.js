import React, { Component } from 'react'
 
class App extends Component {
 
  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          people: data.people
        })
      })
  }
 
  render() {
    return (
     <div> 
      	
     These are the people in the list:<p><li>{this.state.people.map(person => person.name)}
      	</li>
      	</p>
      </div>
    )
  }
 
 }
export default App
