// create your App component here
import React from 'react';

export default class App extends React.Component {

  state = {
    peopleInSpace: []
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(json => {this.setState({
        peopleInSpace: json.people
      })}
    )
  }

}
