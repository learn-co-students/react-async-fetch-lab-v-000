import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()

  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
  }

  render(){
    return (
      <div></div>
    );
  };
}

export default App;
