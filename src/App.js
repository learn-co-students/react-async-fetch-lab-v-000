import React, {Component} from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
          .then(resp => resp.json())
          .then(json => this.setState({
              people: json.people
              })
          )
  }

  render() {
    return(
      <div>
      {this.state.people.map((person) => <h1>{person.name}</h1>)}
      </div>
    )
  }

}
