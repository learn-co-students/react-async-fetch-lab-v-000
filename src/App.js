// create your App component here
import React from 'react'

class App extends React.Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(data => {
      this.setState({
        peopleInSpace: data.people
      })
    })
  }

  renderPeople () {
    return this.state.peopleInSpace.map(person => person.name)
  }

  render() {
    return (
      <div>
        {this.renderPeople()}
      </div>
    )
  }
}

export default App