import React, { Component } from 'react';

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
        })
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.peopleInSpace.map((person, id) => <h3 key={id}>{person.name}</h3>)}
      </div>
    );
  }
}

export default App;
