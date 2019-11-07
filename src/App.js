// create your App component here
import React from "react";

class App extends React.Component {
  state = {
    people: []
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(({ people }) => this.setState({ people: people }));
  }

  render() {
    return (
      <div>
        {this.state.people.map(person => (
          <h1>{person.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
