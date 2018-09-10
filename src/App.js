// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      peopleInSpace: []
    }
  }

  render() {
    let personId = 0; 
    return(
      <div>
        {console.log(this.state.peopleInSpace)}
        {/* including 'key' attr to have unique requirement of array-children(react) */}
        {this.state.peopleInSpace.map(person => 
          <div className="card" key={`${person.name} ${personId}`}>
            <h3>{person.name}</h3> 
            <p>CRAFT: {person.craft}</p>
            {personId += 1}
          </div>) 
        }
      </div>
    );
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

// Create a functional App component from scratch
// Write a componentDidMount method. 
// Inside the method, send a fetch request to 
// http://api.open-notify.org/astros.json  
// a free API that returns a list of people currently in space.