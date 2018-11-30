import React from 'react';

export default class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      people: []
    };
  }
  
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          people: data.people});
      });
  }

  render() {
    const people = this.state.people
    return people.map(person => {
      return (
        <div>
          <h1>Name: {person.name}</h1>
          <h3>Craft: {person.craft}</h3>
        </div>
      )
    })
  }
}
