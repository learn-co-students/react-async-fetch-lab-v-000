import React, {Component} from 'react'

export default class App extends Component {

  state = {
    peopleInSpace: []
  }


  render() {
    let peopleInSpace = this.state.peopleInSpace.map(person => <li>{person.name}</li>)
    return (
      <ul>
        {peopleInSpace}
      </ul>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }
}
