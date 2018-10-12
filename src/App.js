// create your App component here
import React from 'react';
import ReactDom from 'react-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
    .then(resp => resp.json())
    .then(json => this.setState({people: this.getPeople(json) }))
  };

  getPeople = (json) => {
    return json.people.map(person => {
      return person.name;
    })
  }

  render() {
    return (
      <div>{this.state.people}</div>
    )
  }
}
