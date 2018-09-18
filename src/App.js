import React, { Component } from 'react'

export default class App extends Component {

  state = {
      peopleInSpace: [],
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          peopleInSpace: json.people,
        });
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    );
  }

}
