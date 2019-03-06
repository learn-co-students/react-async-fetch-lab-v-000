import React, { Component } from 'react';

export default class App extends Component {

  state = {
    pplInSpace: []
  }

  render() {

    this.people = this.state.pplInSpace.map(person =>
      <li>{person.name}</li>
    )

    return (
      <ul>{this.people}</ul>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        pplInSpace: data.people
      })
    })
  }

}
