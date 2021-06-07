// create your App component here
import React from 'react'

export default class App extends React.Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(personData =>
        this.setState({peopleInSpace: personData.people })
        )
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
      </div>
    )
  }


}