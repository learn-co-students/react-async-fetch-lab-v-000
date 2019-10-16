// create your App component here
import React from "react";

class App extends React.Component {
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(people => this.setState({ people: people }));
  }

  render() {
    return (
      <div>
        <p>{this.people}</p>
      </div>
    );
  }
}

export default App;
