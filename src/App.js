import React, { Component } from "react";

export default class extends Component {
  state = {
    listOfPeople: []
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(data => {
        const { people: listOfPeople } = data;
        this.setState({ listOfPeople });
      });
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1>List of People in Space</h1>
        </header>
        <section className="app__body">
          <ul>
            {this.state.listOfPeople.map(({ craft, name }, index) => (
              <li key={index}>
                {name} ({craft})
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
