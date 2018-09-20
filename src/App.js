// create your App component here
import React from 'react'

class App extends React.Component {

state = {
  people: []
}

listPeople = () => {
  this.state.people.join(", ")
}

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => this.setState({people: data.people.map(person => person.name)}))
  };

  render() {
    return (
      <div>
      {this.listPeople()}
      </div>
    )
  };
}
export default App
