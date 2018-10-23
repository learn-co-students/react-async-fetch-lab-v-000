// create your App component here
import React from 'react';

export default class App extends React.Component {
  
  state = {
    value: ""
  }
  
  componentDidMount () {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
        this.setState({
          value: "Hello"
        })
      })
  }
  
  render () {
    return (this.state.value);
  }
}