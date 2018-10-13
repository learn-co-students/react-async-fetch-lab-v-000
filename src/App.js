// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        this.setState({people: jsonResponse.people});
      });
  }

  render() {
    const listOfPeople = this.state.people.map((person, key) => {
      return <p key={key}>{person.name}</p>
    });

    return (
      <div>
        {listOfPeople}
      </div>
    )
  }
}
