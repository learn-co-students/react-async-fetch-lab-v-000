import React from 'react'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(astronauts => this.setState({
      astronauts: astronauts.people.map(astronaut => astronaut.name)
    }))
  }

  render() {
    return (
      <div>
        {this.state.astronauts}
      </div>
    )
  }
}
