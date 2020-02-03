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
      These are the people in the list:
       <ul>
       {this.state.people.map(person => 
        <li key={person.id}>
        {person.name} </li>)}
      	</ul>
      </div>
    )
  }
 
 }
export default App
