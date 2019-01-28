// create your App component here
import React, {Component} from 'react';

export default class App extends Component{

  state = {
    spacePeeps: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(({people}) =>
      this.setState({
        spacePeeps: people
      })
    )
  }

  render(){
    return(
      <div>
        <ol>
      {this.state.spacePeeps.map((person, id) => <li key={id}> {person.name}</li>)}
        </ol>
      </div>
    )
  }
}
