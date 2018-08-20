// create your App component here
import React, {Component} from 'react';

export default class Timer extends Component {

  constructor() {
    super()
    this.state = {
      peopleInSpace: []
    }
  }

  // insert any Component Mounting or updating commands here before render ()
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
    // insert any variables you might need here before return()
    return (
      <div>
        {this.state.peopleInSpace.map(person => <p>{person.name}</p>)}
      </div>
    );
  }
}
