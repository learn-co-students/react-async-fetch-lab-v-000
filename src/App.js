import React, { Component } from "react";

// create your App component here
class App extends React.Component {
  state = {
    peopleInSpace: []
  };

  componentDidMount() {
    let endpoint = "http://api.open-notify.org/astros.json";
    fetch(endpoint)
      .then(res => res.json)
      .then(data =>
        this.setState({
          peopleInSpace: data.people
        })
      );
  }

  render() {
    return <div>{this.state.peopleInSpace.map(person => person.name)}</div>;
  }
}

export default App;
