import React, { Component } from 'react';

export default class App extends Component {

  render() {
    return(
      <h1>See console</h1>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data =>  {
      console.log(data.people)
    },
    error => {
      console.log("error: " + error)
    })
  }
}
