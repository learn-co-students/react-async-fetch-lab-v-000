import React, { Component } from 'react';


export default class App extends Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(json => this.setState({peopleInSpace: json.people}))
  }
  render() {
    const list = this.listPeopleInspace

    return(
      <div>
        <ul>
          {this.state.peopleInSpace.map( (person) => <li>{person.name}</li>)}
        </ul>
      </div>

    )
  }
}
