import React, { Component } from "react";

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
        });
      });
  }

  render() {
    return (
      <div>
        <h1>People in Space</h1>
          <ul>
          {this.state.peopleInSpace.map((people, id) => (
            <li key={id}>Name: {people.name}</li>
          ))}
          </ul>
      </div>
    );
  }
}

export default App;
