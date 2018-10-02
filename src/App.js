// create your App component here

import React, { Component } from "react";

class App extends Component {
  state = {
    peopleInSpace: []
  };

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map(people => {
          return <h2>{people.name}</h2>;
        })}
      </div>
    );
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        });
      });
  }
}

export default App;
