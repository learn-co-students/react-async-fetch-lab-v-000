import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          people: myJson.people
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.people.map(person => {
          return <h3>{person.name}</h3>;
        })}
      </div>
    );
  }
}
