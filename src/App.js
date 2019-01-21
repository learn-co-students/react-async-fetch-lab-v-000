// create your App component here
import React, { Component } from 'react';

class App extends Component {

  //no props being used here, so we can use the shorthand declaration of state
  state = {
    people: []
  }



  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        people: data.people
      })
    })
  }


  render() {

    return (
      <div className="App">
      </div>
    );
  }

}

export default App;
