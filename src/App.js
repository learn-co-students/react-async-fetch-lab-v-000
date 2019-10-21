import React, {Component} from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      people: ""
    }
  };
  render() {
    return (
      <div></div>
    );
  };

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(people => this.setState({people: people}, () => console.log(this.state)))
  }

};
