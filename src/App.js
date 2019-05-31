import React, { Component } from 'react';

class App extends Component {

  state = {
    astros: {}
  }

  componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          astros: data.people
        })
      })
  }

  render() {
    console.log(this.state.astros)
    return (
      <div className="App">
      </div>
    );
  }

}

export default App;
