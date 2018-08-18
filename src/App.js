import React, { Component } from 'react'

class App extends Component {
  state = {
    people: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          people: json.people.map(person => person.name)
        });
      });
  }

  renderPeople = () => {
    return this.state.people.map(person => {
      return <p>{person}</p>
    });
  }

  render() {
    return(
      <div>
        <h1>People currently in space:</h1>
        <div>{this.renderPeople()}</div>
      </div>
    )
  }
}

export default App