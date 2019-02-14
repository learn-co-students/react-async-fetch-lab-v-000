// create your App component here
import React, {Component} from 'react';

export default class App extends Component {
  constructor(){
    super();
    this.state = {peopleInSpace: []}
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(resp => this.setState({peopleInSpace: resp.people}))
  }

  render(){
    return (
      <div className="peopleInSpace" >
      {this.state.peopleInSpace.map(people => <li>{people.name}</li>)}
      </div>
    )
  }
}